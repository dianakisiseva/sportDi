import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useTranslation } from 'react-i18next'

function SelectColumnFilter ({
  column: { Header, filterValue, setFilter, filterSettings }
}) {
  const { t } = useTranslation()
  let innerValue

  if (filterSettings.isMulti) {
    innerValue = filterSettings.options.filter(o => filterSettings.initialValue && filterSettings.initialValue.length && filterSettings.initialValue.indexOf(o.value) !== -1)
  } else {
    innerValue = filterSettings.options.filter(o => filterSettings.initialValue === o.value)[0]
  }
  const [fieldSelect, setFieldSelect] = useState(innerValue)

  const {
    options, // options for the select
    isMulti = false, // is the select multi
    isSearchable = false, // is the select searchable
    isClearable = false, // is the select clearable
    hideSelectedOptions = false, // should the selected options be hidden from the options
    escapeClearsValue = false, // should escape clear selected values
    placeholder = 'Select option'
  } = filterSettings ?? {}

  useEffect(() => {
    !filterValue && setFieldSelect(null)
  }, [filterValue])

  return (
    <div className='select-input'>
      <label>{Header}</label>

      <Select
        options={options}
        value={fieldSelect || ''}
        onChange={e => {
          setFieldSelect(e)

          const value = isMulti
            ? (e
              ? e.map(el => `^${el.value}$`).join('|')
              : null)
            : (e
              ? e.value ? `^${e.value}$` : e.value
              : null)

          setFilter(value)
        }}
        isMulti={isMulti}
        placeholder={placeholder}
        noOptionsMessage={() => t('ui.no_results')}
        className='select-custom-input'
        classNamePrefix={isMulti ? 'select-multi' : 'select'}
        isSearchable={isSearchable}
        isClearable={isClearable}
        hideSelectedOptions={hideSelectedOptions}
        escapeClearsValue={escapeClearsValue}
      />
    </div>
  )
}

export default SelectColumnFilter
