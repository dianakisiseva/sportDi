import React from 'react'
import Select from 'react-select'
import { useTranslation } from 'react-i18next'

function BulkActionsSelect ({ bulkActions, selectedRowsEntityIds, selectedRowsEntity, dataSize }) {
  const { t } = useTranslation()

  const options = bulkActions.map(row => ({
    label: row.name,
    value: row.name,
    callback: row.callback
  }))

  return (
    <div className='select-input'>
      <label>{t('ui.action')} - {selectedRowsEntityIds.length} / {dataSize}</label>

      <Select
        options={options}
        value=''
        onChange={e => {
          e.callback(selectedRowsEntityIds, selectedRowsEntity)
        }}
        isMulti={false}
        placeholder={t('ui.select_option')}
        noOptionsMessage={() => t('ui.no_options')}
        className='select-custom-input'
        classNamePrefix='select'
        isSearchable={false}
        isClearable={false}
        isDisabled={selectedRowsEntityIds.length === 0}
      />
    </div>
  )
}

export default BulkActionsSelect
