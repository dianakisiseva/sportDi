import React from 'react'

const IconProfile = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M20.5 12c4.692 0 8.5 3.808 8.5 8.5S25.192 29 20.5 29a8.503 8.503 0 01-8.5-8.5c0-4.692 3.808-8.5 8.5-8.5zm-5.08 11.404c1.247 1.861 3.12 3.046 5.216 3.046 2.094 0 3.969-1.184 5.216-3.046a7.623 7.623 0 00-5.216-2.054 7.623 7.623 0 00-5.216 2.054zm5.08-3.754a2.55 2.55 0 100-5.1 2.55 2.55 0 000 5.1z'
      />
    </svg>
  )
}

export default IconProfile
