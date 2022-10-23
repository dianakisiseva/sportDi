import React from 'react'

const IconDelete = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 18.4 18.4'
    >
      <path
        className='icon'
        d='M18.4,1.4l-7.8,7.8l7.8,7.8L17,18.4l-7.8-7.8l-7.8,7.8L0,17l7.8-7.8L0,1.4L1.4,0l7.8,7.8L17,0L18.4,1.4z'
      />
    </svg>
  )
}

export default IconDelete
