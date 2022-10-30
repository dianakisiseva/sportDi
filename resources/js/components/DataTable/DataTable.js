import React, {
  forwardRef,
  Fragment,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import { useTable, usePagination, useSortBy, useGlobalFilter, useFilters, useRowSelect } from 'react-table'
import { api, objectToQuerystring } from '../../utils'
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronDown,
  IconChevronUp, GlobalDateRangeFilter
} from '..'
import GlobalFilter from './Filters/GlobalFilter'
import TextColumnFilter from './Filters/TextColumnFilter'
import { useTranslation } from 'react-i18next'
import SelectRowCheckbox from './SelectRows/SelectRowCheckbox'
import BulkActionsSelect from './BulkActions/BulkActionsSelect'
import CellParse from './CellParse'

const defaultPropGetter = () => ({})

const DataTable = forwardRef(({
  columns,
  fetchUrl,
  initialState = {},
  globalSearch = false,
  globalDateRangeSearch = false,
  noDataMessage,
  filterMultipleColumns = false,
  bulkActions,
  getRowProps = defaultPropGetter,
  version = 1
}, ref) => {
  const { t } = useTranslation()
  // We'll start our table without any data
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [controlledPageCount, setControlledPageCount] = useState(0)
  const [filteredCount, setFilteredCount] = useState(0)
  const [recordsFrom, setRecordFrom] = useState(0)
  const [recordsTo, setRecordTo] = useState(0)
  const [filterMultipleColumnsValue, setFilterMultipleColumnsValue] = useState('')
  const fetchIdRef = useRef(0)
  const [selectedRowsEntityIds, setSelectedRowsEntityIds] = useState([])
  const [selectedRowsEntity, setSelectedRowsEntity] = useState([])
  const [globalDateRangeFilter, setGlobalDateRangeFilter] = useState(null)
  let ajaxRequest = null
  const mainTableRef = useRef()
  const mainTableWrapRef = useRef()
  const secondaryTableWrapRef = useRef()
  const [scrollTopWidth, setScrollTopWidth] = useState(0)

  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      filterComponent: TextColumnFilter,
      Cell: CellParse
    }),
    []
  )

  const initialFilters = []
  columns.map(c => {
    if (c.filterSettings && c.filterSettings.initialValue) {
      initialFilters.push({ id: c.id, value: c.filterSettings.initialValue })
    }
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    // Get the state from the instance
    state: {
      pageIndex,
      pageSize,
      sortBy,
      globalFilter,
      filters,
      selectedRowIds
    },
    setGlobalFilter,
    setAllFilters
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        pageIndex: 0,
        filters: initialFilters,
        pageSize: initialState.pageSize ?? 10,
        sortBy: JSON.parse(localStorage.getItem(`${fetchUrl}-version-${version}`)) ?? (initialState.sortBy ?? [{ id: 'id', desc: true }]),
        hiddenColumns: initialState.hiddenColumns ?? [],
        selectedRowIds: {}
      }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
      manualSortBy: true,
      manualGlobalFilter: true,
      manualFilters: true
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      !!bulkActions && !!bulkActions.length && hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <SelectRowCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <SelectRowCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          )
        },
        ...columns
      ])
    }
  )

  useImperativeHandle(
    ref,
    () => ({
      reload () {
        fetchData({
          pageIndex,
          pageSize,
          sortBy,
          globalFilter,
          filters,
          filterMultipleColumnsValue
        })
      }
    })
  )

  // Listen for changes in selected row
  useEffect(() => {
    const selectedRowsIndexes = Object.keys(selectedRowIds)
    const selectedData = data.filter((rows, i) => selectedRowsIndexes.includes(i.toString()))
    let selectedDataIds = []

    if (selectedData.length) {
      selectedDataIds = selectedData.map(row => row.id)
    }

    setSelectedRowsEntityIds(selectedDataIds)
    setSelectedRowsEntity(selectedData)
  }, [selectedRowIds])

  // Listen for changes in selected row
  useEffect(() => {
    localStorage.setItem(`${fetchUrl}-version-${version}`, JSON.stringify(sortBy))
  }, [sortBy])

  // Listen for changes in and use the state to fetch our new data
  useEffect(() => {
    fetchData({
      pageIndex,
      pageSize,
      sortBy,
      globalFilter,
      filters,
      filterMultipleColumnsValue,
      globalDateRangeFilter
    })
  }, [pageIndex, pageSize, sortBy, globalFilter, filters, filterMultipleColumnsValue, globalDateRangeFilter])

  useEffect(() => {
    setScrollbarTop()

    window.addEventListener('resize', setScrollbarTop)

    return () => {
      window.removeEventListener('resize', setScrollbarTop)
    }
  }, [mainTableRef.current])

  const setScrollbarTop = () => {
    setTimeout(() => {
      setScrollTopWidth(mainTableRef.current ? mainTableRef.current.getBoundingClientRect().width : 0)
    }, 500)
  }

  const fetchData = useCallback(({
    pageSize,
    pageIndex,
    sortBy,
    globalFilter,
    filters,
    filterMultipleColumnsValue,
    globalDateRangeFilter
  }) => {
    // This will get called when the table needs new data
    // You could fetch your data from literally anywhere,
    // even a server. But for this example, we'll just fake it.

    // Give this fetch an ID
    const fetchId = ++fetchIdRef.current
    const dataTableColumns = columns.map(c => {
      return {
        id: c.id,
        name: c.name,
        accessor: c.accessor,
        orderable: c.orderable,
        searchable: c.searchable,
        orderRule: c.orderRule,
        filterRule: c.filterRule ?? '',
        search: { value: c.search.value, regex: c.search.regex } // value is '' to reset filter
      }
    })

    // Set the loading state
    setLoading(true)

    // Only update the data if this is the latest fetch
    if (fetchId === fetchIdRef.current) {
      // sort column
      const order = []
      sortBy.forEach((el, i) => {
        order[i] = {}
        order[i].column = dataTableColumns.findIndex(x => x.id === el.id).toString()
        order[i].dir = el.desc ? 'desc' : 'asc'
      })

      // filters
      if (filters.length) {
        filters.forEach(f => {
          dataTableColumns.forEach(c => {
            if (c.id === f.id) {
              c.search.value = f.value
            }
          })
        })
      }

      const additionalParams = {}

      if (filterMultipleColumns) {
        additionalParams.multiple_columns = {
          columns: filterMultipleColumns.columns,
          value: filterMultipleColumnsValue
        }
      }

      if (globalDateRangeFilter) {
        additionalParams.global_date_range = globalDateRangeFilter

        if (globalDateRangeSearch.params) {
          additionalParams.global_date_range = {
            ...additionalParams.global_date_range,
            ...globalDateRangeSearch.params
          }
        }
      }

      let params = {
        draw: fetchId,
        columns: dataTableColumns,
        start: pageIndex * pageSize,
        length: pageSize,
        order: order,
        search: { value: globalFilter ?? '', regex: 'false' },
        ...additionalParams
      }

      params = objectToQuerystring(params)

      if (ajaxRequest) {
        ajaxRequest.cancel()
      }

      ajaxRequest = api.CancelToken.source()

      api.get(fetchUrl + params, { cancelToken: ajaxRequest.token })
        .then(res => {
          setData(res.data.data)
          // Your server could send back total page count.
          // For now we'll just fake it, too
          setControlledPageCount(Math.ceil(res.data.recordsFiltered / pageSize))
          setFilteredCount(res.data.recordsFiltered)
          setRecordFrom((pageSize * pageIndex) + 1)
          setRecordTo((pageSize * pageIndex) + res.data.data.length)

          setLoading(false)
        })
        .catch(error => { }) // eslint-disable-line
    }
  }, [fetchUrl])

  const getVisiblePages = (page, total) => {
    if (total < 7) {
      return [1, 2, 3, 4, 5, 6].filter(page => page <= total)
    } else {
      if (page % 5 >= 0 && page > 4 && page + 2 < total) {
        return [1, page - 1, page, page + 1, total]
      } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total]
      } else {
        return [1, 2, 3, 4, 5, total]
      }
    }
  }

  const handleScrollEvent = (isMain) => {
    if (isMain && secondaryTableWrapRef.current) {
      secondaryTableWrapRef.current.scrollLeft = mainTableWrapRef.current.scrollLeft
    } else if (!isMain && secondaryTableWrapRef.current) {
      mainTableWrapRef.current.scrollLeft = secondaryTableWrapRef.current.scrollLeft
    }
  }

  // Render the UI for your table
  return (
    <div className='table-layout-container'>
      {globalSearch &&
        <div className='row'>
          <div className='col-6'>
            <GlobalFilter
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </div>
        </div>}

      {globalDateRangeSearch &&
        <div className='row'>
          <GlobalDateRangeFilter
            filterValue={globalDateRangeFilter}
            setFilter={setGlobalDateRangeFilter}
            filterSettings={globalDateRangeSearch}
          />
        </div>}

      {(!!headerGroups.filter(hg => hg.headers.filter(c => c.canFilter).length).length || filterMultipleColumns) &&
        <div className='row mb-3'>
          {filterMultipleColumns &&
            <div className='col-3'>
              <TextColumnFilter
                column={{
                  Header: filterMultipleColumns.header,
                  filterValue: filterMultipleColumnsValue,
                  setFilter: setFilterMultipleColumnsValue,
                  filterSettings: filterMultipleColumns.filterSettings
                }}
              />
            </div>}

          {headerGroups.length && headerGroups.map((headerGroup, i) => (
            headerGroup.headers.map((column, j) => (
              column.canFilter
                ? !column.noWrap
                  ? (
                    <div key={`search-column-${j}`} className='col-3'>
                      {column.render('filterComponent')}
                    </div>
                  )
                  : (
                    <Fragment key={`search-column-${j}`}>
                      {column.render('filterComponent')}
                    </Fragment>
                  )
                : null
            ))
          ))}
        </div>}

      {(!!globalFilter || !!globalDateRangeFilter || !!filters.length || filterMultipleColumnsValue) &&
        <button
          className='btn-tool btn-tool__small mb-5'
          onClick={() => {
            setGlobalFilter(null)
            setGlobalDateRangeFilter(null)
            setAllFilters([])
            setFilterMultipleColumnsValue('')
          }}
        >{t('ui.reset_filters')}
        </button>}

      {!!bulkActions && !!bulkActions.length &&
        <div className='row'>
          <div className='col-3'>
            <BulkActionsSelect
              bulkActions={bulkActions}
              selectedRowsEntityIds={selectedRowsEntityIds}
              selectedRowsEntity={selectedRowsEntity}
              dataSize={data.length}
            />
          </div>
        </div>}

      <div className='table-scroll-top' ref={secondaryTableWrapRef} onScroll={() => handleScrollEvent(false)}>
        <div style={{ width: scrollTopWidth }} />
      </div>
      <div className={`table-scroll-wrap-outer${mainTableRef.current && mainTableRef.current.offsetWidth > mainTableWrapRef.current.offsetWidth ? ' has-scroll' : ''}`}>
        <div className='table-scroll-wrap' ref={mainTableWrapRef} onScroll={() => handleScrollEvent(true)}>
          <table
            ref={mainTableRef}
            {...getTableProps()}
            className={`table-layout ${loading ? 'loading-table-data' : ''}`}
          >
            <thead className='table-layout__header'>
              {headerGroups.map((headerGroup, i) => (
                <tr key={`header-group-${i}`} {...headerGroup.getHeaderGroupProps()} className='table-layout__header-row'>
                  {headerGroup.headers.map((column, j) => (
                    <th key={`header-${j}`} {...column.getHeaderProps(column.getSortByToggleProps())} className='table-layout__header-col'>
                      <div className='table-layout__header-col-container'>
                        {column.render('Header')}
                        <span className='table-layout__header-icon'>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? <IconChevronDown />
                              : <IconChevronUp />
                            : ''}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className='table-layout__body'>
              {!!pageCount && page.map((row, i) => {
                prepareRow(row)
                return (
                  <tr key={`row-${i}`} {...row.getRowProps(getRowProps(row))} className='table-layout__body-row'>
                    {row.cells.map(cell => {
                      return (
                        <td
                          key={`cell-${cell.id}`}
                          {...cell.getCellProps()}
                          className='table-layout__body-col'
                        >{cell.render('Cell')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}

              {!loading && !pageCount &&
                <tr className='table-layout__body-row'>
                  <td className='table-layout__body-col text-center' colSpan='99'>{noDataMessage ?? 'No results found'}</td>
                </tr>}

              {!!loading &&
                <tr className='table-layout__body-row'>
                  <td className='table-layout__body-col text-center' colSpan='99'>{t('ui.loading')}</td>
                </tr>}
            </tbody>
          </table>
        </div>
      </div>

      {!!pageCount &&
        <div className='table-pagination__wrap'>
          <p className='mr-5'>{recordsFrom} - {recordsTo} / {filteredCount}</p>

          <div className='table-pagination'>
            {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className={`table-pagination__button ${canPreviousPage ? '' : 'is-disabled'}`}> */}
            {/*  /!* TODO: replace icon *!/ */}
            {/*  <IconChevronLeft /> */}
            {/*  <IconChevronLeft /> */}
            {/* </button> */}
            <button
              onClick={() => previousPage()} disabled={!canPreviousPage}
              className={`table-pagination__button ${canPreviousPage ? '' : 'is-disabled'}`}
            >
              <IconChevronLeft />
            </button>
            {getVisiblePages(pageIndex, pageCount).map((page, index, array) => {
              return (
                <div key={`pagination-${index}`}>
                  {page === pageCount && pageCount > 6 && pageIndex < pageCount - 2 &&
                    <span key='prev-pages' className='table-pagination__button'>...</span>}

                  <button
                    key={index} className={`table-pagination__button ${pageIndex + 1 === page ? 'is-active' : ''}`}
                    onClick={() => gotoPage(page - 1)}
                  >
                    {page}
                  </button>

                  {page === 1 && pageCount > 6 && pageIndex > 4 && <span key='prev-pages' className='table-pagination__button'>...</span>}
                </div>
              )
            })}
            <button
              onClick={() => nextPage()} disabled={!canNextPage}
              className={`table-pagination__button ${canNextPage ? '' : 'is-disabled'}`}
            >
              <IconChevronRight />
            </button>
            {/* <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className={`table-pagination__button ${canNextPage ? '' : 'is-disabled'}`}> */}
            {/*  /!* TODO: replace icon *!/ */}
            {/*  <IconChevronRight /> */}
            {/*  <IconChevronRight /> */}
            {/* </button> */}
          </div>
        </div>}
    </div>
  )
}
)

export default DataTable
