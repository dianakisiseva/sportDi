import React from 'react'

export const FieldWrapper = (props) => {
  const { wrapper, children } = props

  if (typeof (wrapper) !== 'undefined' || wrapper != null) {
    return React.createElement(wrapper.element, { className: wrapper.class }, children)
  }

  return children
}
