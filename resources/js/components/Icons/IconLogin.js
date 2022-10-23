import React from 'react'

const IconLogin = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M24.5 19H26v7.5H14V19h1.5v-1.5a4.5 4.5 0 119 0V19zm-3 0v-1.5a1.5 1.5 0 00-3 0V19h3z'
      />
    </svg>
  )
}

export default IconLogin
