import React from 'react'

const IconHome = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M27 28.648H13a1 1 0 01-1-1v-9H9L19.327 9.26a1 1 0 011.346 0L31 18.648h-3v9a1 1 0 01-1 1zm-13-2h12v-9.843l-6-5.454-6 5.454v9.843z'
      />
    </svg>
  )
}

export default IconHome
