import React from 'react'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import { isRequiredFromRules } from '../../../utils'

export const Input = ({ formField, value, onChange, errors, showOnly }) => {
  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    readOnly, // is the element read only
    type, // type of the element
    min, // min attribute of the element
    accept, // accept attribute of the element
    placeholder, // placeholder of the element
    rules,
    disabled
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

  if (type === 'hidden') {
    return (
      <>
        <input
          type='hidden'
          value={value ?? ''}
          name={name}
        />
        <FieldError errors={errors} />
      </>
    )
  }

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className='input-element input-text'>
        {label &&
          <label htmlFor={name}>{label} {isRequired ? <span className='label-span'>*</span> : ''}</label>}

        <div className={`${(!!errors && !!errors.length) ? 'has-errors' : ''}`}>
          <input
            id={name}
            type={type}
            min={min}
            value={value ?? ''}
            name={name}
            accept={accept}
            disabled={disabled ?? false}
            placeholder={placeholder}
            readOnly={readOnly}
            onChange={onChange}
          />

          <FieldError errors={errors} />
        </div>
      </div>
    </FieldWrapper>
  )
}
