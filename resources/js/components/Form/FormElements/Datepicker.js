import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import i18n from 'i18next'
import { enGB, fr } from 'date-fns/esm/locale'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import { isRequiredFromRules } from '../../../utils'

const locale = {
  en: enGB,
  fr: fr
}

registerLocale(i18n.language, locale[i18n.language])

export const Datepicker = ({ formField, value, onChange, errors, minDate, showOnly }) => {
  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    isDisabled = false, // is the date picker read only
    maxDate, // max date of date picker,
    isClearable = true,
    rules
  } = formField

  const isRequired = isRequiredFromRules(rules)

  if (showOnly) {
    return (
      <FieldWrapper wrapper={wrapper}>
        <div className='field-wrapper-selector input-element'>

          {label &&
            <label htmlFor={name}>{label}</label>}

          <p>{value ?? ''}</p>
        </div>
      </FieldWrapper>
    )
  }
  return (
    <FieldWrapper wrapper={wrapper}>
      <div className='input-element input-text'>
        {label &&
          <label htmlFor={name}>{label} {isRequired ? <span className='label-span'>*</span> : ''}</label>}

        <div className={`${(!!errors && !!errors.length) ? 'has-errors' : ''}`}>
          <DatePicker
            selected={value}
            onChange={date => {
              onChange(date)
            }}
            minDate={minDate || formField.minDate}
            maxDate={maxDate}
            locale={i18n.language}
            dateFormat='dd-MM-yyyy'
            isClearable={!isDisabled && isClearable}
            disabled={isDisabled}
          />

          <FieldError errors={errors} />
        </div>
      </div>
    </FieldWrapper>
  )
}
