import React from 'react'

const IconPhoneBook = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M10 10h16.005c1.102 0 1.995.898 1.995 1.99v16.02c0 1.099-.893 1.99-1.995 1.99H10V10zm4 2h-2v16h2V12zm2 16h10V12H16v16zm2-4a3 3 0 116 0h-6zm3-4a2 2 0 110-4 2 2 0 010 4zm8-6h2v4h-2v-4zm0 6h2v4h-2v-4z'
      />
    </svg>
  )
}

export default IconPhoneBook
