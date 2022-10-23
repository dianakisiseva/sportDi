import React from 'react'

const IconChevronDown = ({ className }) => {
  return (
    <svg
      className={`svg-inline icon-chevron-down ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M20.5 18.363L13.11 26 11 23.818 20.5 14l9.5 9.818L27.89 26z'
      />
    </svg>
  )
}

export default IconChevronDown
