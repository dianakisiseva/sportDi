import React from 'react'

const IconBurger = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M8 9h24.3v2.7H8V9zm0 9.45h16.2v2.7H8v-2.7zm0 9.45h24.3v2.7H8v-2.7z'
      />
    </svg>
  )
}

export default IconBurger
