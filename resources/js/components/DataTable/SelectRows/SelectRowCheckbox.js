import React, { forwardRef, useEffect, useRef } from 'react'

const getId = () => {
  return '_' + Math.random().toString(36).substr(2, 9)
}

const SelectRowCheckbox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef
    const uniqueId = getId()

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <div className='input-checkbox input-element'>
        <div className='input-wrapper'>
          <input type='checkbox' ref={resolvedRef} {...rest} id={uniqueId} />
          <label htmlFor={uniqueId} />
        </div>
      </div>
    )
  }
)

export default SelectRowCheckbox
