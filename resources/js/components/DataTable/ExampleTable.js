import React from 'react'
import DataTable from '../../components/DataTable/DataTable'
import TextColumnFilter from './Filters/TextColumnFilter'

const ExampleTable = () => {
  const columns = React.useMemo(
    () => [
      {
        id: 'id', // id of column in react table
        Header: 'ID', // label of column
        accessor: 'id', // from where react table gets the value
        name: 'id', // column used in db for filter and sort
        orderable: false, // is the column sorted in api for datatables
        disableSortBy: true, // is the column sorted in react-table
        searchable: false, // is the column searchable in api for datatables
        disableFilters: true, // is the column searchable in react-tables
        search: { value: '', regex: 'false' },
        Cell: ({ value }) => value.map(v => v.name), // custom render of column
        filterComponent: TextColumnFilter, // custom filter component
        filterSettings: {
          // prop: some filter settings
        } // custom filter component data
      },
      {
        id: 'name',
        Header: 'Name',
        accessor: 'name',
        name: 'name',
        orderable: false,
        disableSortBy: true,
        searchable: false,
        disableFilters: true,
        search: { value: '', regex: 'false' }
      }
    ],
    []
  )

  const firstBulkAction = (ids) => {
    console.log('action1', ids)
  }

  const secondBulkAction = (ids) => {
    console.log('action2', ids)
  }

  const bulkActions = [
    { name: 'action1', callback: firstBulkAction },
    { name: 'action2', callback: secondBulkAction }
  ]

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <DataTable
            columns={columns}
            fetchUrl='https://bvd.gesdisease.local/disease/get'
            initialState={{
              pageSize: 10, // custom page size
              sortBy: [{ id: 'id', desc: true }, { id: 'name', desc: false }], // custom sort
              hiddenColumns: ['id'] // hide columns by id
            }}
            globalSearch={false}
            filterMultipleColumns={{ // search multiple fields with single filter
              header: 'Search(First Name, Last Name)', // label of multiple columns
              columns: ['id'], // which columns to search
              filterSettings: {
                minSearchLength: 3
              }
            }}
            bulkActions={bulkActions} // if table has bulk actions
            // version={1} // change to new version is saved sort by needs to be reset, column id is updated, or deleted
          />
        </div>
      </div>
    </div>
  )
}

export default ExampleTable
