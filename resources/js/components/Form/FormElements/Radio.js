import React from 'react'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import { isRequiredFromRules } from '../../../utils'

export const Radio = ({ formField, value, onChange, errors }) => {
  const selectedOption = value

  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    options, // options for the radio
    rules
  } = formField

  const isRequired = isRequiredFromRules(rules)

  return (
    <>
      <FieldWrapper wrapper={wrapper}>
        <div>
          {label &&
            <label htmlFor={name}>{label} {isRequired ? <span className='label-span'>*</span> : ''}</label>}

          {options.map(({ value, label }) => {
            return (
              <div key={`radio-input-${value}`}>
                <input type='radio' id={`radio-input-${value}`} value={value} name={name} onChange={onChange} checked={selectedOption === value} />
                <label htmlFor={`radio-input-${value}`} key={value}>{label}</label>
              </div>
            )
          })}

          <FieldError errors={errors} />
        </div>
      </FieldWrapper>
    </>
  )
}
