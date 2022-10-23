import React from 'react'

export const FieldError = ({ errors, customMessage }) => {
  return (
    <>
      {errors && errors.length &&
        <div className='input-error-message text-danger'>{customMessage || errors.join(' ')}</div>}
    </>
  )
}
