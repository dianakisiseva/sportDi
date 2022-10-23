import React from 'react'

const IconClose = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
      transform='rotate(45)'
    >
      <path className='icon' d='M19,19v-9h3v9h9v3h-9v9h-3v-9h-9v-3H19z' />
    </svg>
  )
}
export default IconClose
