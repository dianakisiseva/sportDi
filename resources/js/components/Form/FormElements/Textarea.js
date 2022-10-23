import React from 'react'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import { isRequiredFromRules } from '../../../utils'

export const Textarea = ({ formField, value, onChange, errors, showOnly }) => {
  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    rows, // rows attribute of the element
    maxLength, // maxLength attribute of the element
    placeholder, // placeholder  of the element
    counter, // should counter of the element be displayed
    rules,
    disabled
  } = formField

  const isRequired = isRequiredFromRules(rules)

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
  return (
    <FieldWrapper wrapper={wrapper}>
      <div className='input-element input-text'>
        {label &&
          <label htmlFor={name}>{label} {isRequired ? <span className='label-span'>*</span> : ''}</label>}

        <div className={`${(!!errors && !!errors.length) ? 'has-errors' : ''}`}>
          <textarea
            id={name}
            value={value}
            name={name}
            rows={rows}
            maxLength={maxLength}
            placeholder={placeholder}
            disabled={disabled ?? false}
            onChange={onChange}
          />

          {counter &&
            <div className='textarea-counter'>
              {value.length ? value.length : 0}/{maxLength}
            </div>}

          <FieldError errors={errors} />
        </div>
      </div>
    </FieldWrapper>
  )
}
