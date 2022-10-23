import React from 'react'

const IconEdit = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
    >
      <path
        className='icon'
        d='M4.243 15.97H0v-4.242L11.435.293a1 1 0 011.414 0l2.829 2.829a1 1 0 010 1.414L4.243 15.97zM0 17.97h18v2H0v-2z'
      />
    </svg>
  )
}

export default IconEdit
