import React, { useState, useEffect } from 'react'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import ReactSelect from 'react-select'
import { useTranslation } from 'react-i18next'
import { isRequiredFromRules, Link, route } from '../../../utils'
import { IconToolsAdd, IconToolsEdit } from '../../Icons'
import ReactTooltip from "../../Tooltip/ReactTooltip";

export const Select = ({ formField, value, onChange, errors, showOnly }) => {
  const { t } = useTranslation()
  let innerValue

  if (showOnly) {
    return (
      <FieldWrapper wrapper={formField.wrapper}>
        <div className='field-wrapper-selector input-element'>

          {formField.label &&
            <label htmlFor={formField.name}>{formField.label}</label>}

          <p>{value ?? ''}</p>
        </div>
      </FieldWrapper>
    )
  }
  if (formField.isMulti) {
    innerValue = formField.options.filter(o => value.contains(o.value))
  } else {
    innerValue = formField.options.filter(o => value === o.value)[0]
  }

  useEffect(() => {
    if (value !== innerValue) {
      if (formField.isMulti) {
        innerValue = formField.options.filter(o => value.contains(o.value))
      } else {
        const temp = formField.options.filter(o => value === o.value)[0]
        innerValue = temp || null
      }

      setFieldSelect(innerValue)
    }
  }, [value])

  const [fieldSelect, setFieldSelect] = useState(innerValue)

  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    options, // options for the select
    isMulti = false, // is the select multi
    isSearchable = false, // is the select searchable
    isClearable = false, // is the select clearable
    hideSelectedOptions = false, // should the selected options be hidden from the options
    escapeClearsValue = false, // should escape clear selected values
    createAction, // create action connected to dropdown
    editAction, // create action connected to dropdown
    showCustomValue, // show custom value of the selection
    isDisabled = false, // is the dropdown disabled
    className, // custom class
    rules
  } = formField

  const isRequired = isRequiredFromRules(rules)

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className={`select-input input-element  ${(!!errors && !!errors.length) ? 'has-errors' : ''}`}>
        {label &&
          <label htmlFor={name}>{label} {isRequired ? <span className='label-span'>*</span> : ''}</label>}

        <ReactSelect
          value={fieldSelect}
          onChange={e => {
            // setFieldSelect(e)

            const value = isMulti
              ? (e
                ? e.map(el => el.value)
                : null)
              : (e
                ? e.value
                : null)

            onChange(value)
          }}
          options={options}
          isMulti={isMulti}
          isClearable={isClearable}
          placeholder={t('ui.select_option')}
          noOptionsMessage={() => t('ui.no_results')}
          name={name}
          className={`select-custom-input ${className}`}
          classNamePrefix={isMulti ? 'select-multi' : 'select'}
          isSearchable={isSearchable}
          hideSelectedOptions={hideSelectedOptions}
          escapeClearsValue={escapeClearsValue}
          isDisabled={isDisabled}
        />

        {createAction &&
          <div className='btn-select-action__wrap'>
            <ReactTooltip content={createAction.tooltip} placement='right'>
              <Link
                href={createAction.link}
                className='btn-select-action'
              >
                <IconToolsAdd />
              </Link>
            </ReactTooltip>
          </div>}

        {editAction && !isMulti && fieldSelect &&
          <div className='btn-select-action__wrap btn-select-action__wrap-edit'>
            <ReactTooltip content={editAction.tooltip} placement='right'>
              <Link
                href={route(editAction.link, { id: fieldSelect.value })}
                className='btn-select-action'
              >
                <IconToolsEdit />
              </Link>
            </ReactTooltip>
          </div>}

        <FieldError errors={errors} />
      </div>

      {showCustomValue && !isMulti && fieldSelect &&
        <div className='input-element input-text'>
          <label>{showCustomValue.label}</label>
          <p className='text-bold ml-4'>{fieldSelect[showCustomValue.value]}</p>
        </div>}
    </FieldWrapper>
  )
}
