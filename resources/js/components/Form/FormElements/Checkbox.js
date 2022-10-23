import React from 'react'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'

export const Checkbox = ({ formField, value, onChange, errors, showOnly }) => {
  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    readOnly // is the element read only
  } = formField

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
      <div className='input-checkbox input-element'>
        <div className='input-wrapper'>
          <input
            type='checkbox'
            value={value}
            name={name}
            id={name}
            onChange={onChange}
            defaultChecked={value}
            disabled={readOnly}
          />
          <label htmlFor={name}>{label}</label>
        </div>

        <FieldError errors={errors} />
      </div>
    </FieldWrapper>
  )
}
