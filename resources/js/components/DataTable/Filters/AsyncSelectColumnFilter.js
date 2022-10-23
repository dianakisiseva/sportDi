import React, { useEffect, useState } from 'react'
import AsyncSelect from 'react-select/async'
import { api, objectToQuerystring } from '../../../utils'
import { useTranslation } from 'react-i18next'

function AsyncSelectColumnFilter ({
  column: { Header, filterValue, setFilter, filterSettings }
}) {
  const { t } = useTranslation()

  const [fieldSelect, setFieldSelect] = useState('')
  const [inputSelect, setInputSelect] = useState('')

  const {
    minSearchLength = 0, // min chars for search
    fetchUrl, // endpoint to get options for the select
    isMulti, // is the select multi
    isClearable, // is the select clearable
    hideSelectedOptions, // should the selected options be hidden from the options
    escapeClearsValue // should escape clear selected values
  } = filterSettings ?? {}

  useEffect(() => {
    !filterValue && setFieldSelect(null)
  }, [filterValue])

  const searchFilterOptions = (inputValue, callback) => {
    setInputSelect(inputValue)

    if (inputValue.length >= minSearchLength) {
      let params = {
        searchValue: inputValue
      }

      params = objectToQuerystring(params)

      api.get(fetchUrl + params)
        .then(res => {
          callback(res.data)
        })
    } else {
      callback(null)
    }
  }

  return (
    <div className='select-input'>
      <label>{Header}</label>

      <AsyncSelect
        minimumInput={3}
        loadOptions={(inputValue, callback) => searchFilterOptions(inputValue, callback)}
        value={fieldSelect || ''}
        onChange={e => {
          setFieldSelect(e)

          const value = isMulti
            ? (e
              ? e.map(el => `^${el.value}$`).join('|')
              : null)
            : (e
              ? `^${e.value}$`
              : null)

          setFilter(value)
        }}
        isMulti={typeof isMulti !== 'undefined' && isMulti}
        placeholder={t('ui.select_option')}
        noOptionsMessage={() => inputSelect.length < minSearchLength ? t('ui.min_chars_search', { length: minSearchLength }) : t('ui.no_results')}
        className='select-custom-input'
        classNamePrefix={typeof isMulti !== 'undefined' && isMulti ? 'select-multi' : 'select'}
        isSearchable
        isClearable={typeof isClearable !== 'undefined' ? isClearable : true}
        hideSelectedOptions={typeof hideSelectedOptions !== 'undefined' ? hideSelectedOptions : false}
        escapeClearsValue={typeof escapeClearsValue !== 'undefined' ? escapeClearsValue : false}
      />
    </div>
  )
}

export default AsyncSelectColumnFilter
