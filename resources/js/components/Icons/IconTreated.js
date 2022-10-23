import React from 'react'

const IconTreated = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
    >
      <path d='m12.926 3.2 3.8735 3.8641a.6819.6819 0 0 1 0 .9659l-5.3266 5.3135-1.4516.483-.9689.9658a.686.686 0 0 1-.9682 0l-2.9054-2.8982a.6819.6819 0 0 1 0-.9659l.9683-.9658.484-1.4488L11.9578 3.2a.686.686 0 0 1 .9683 0Zm.484 2.4153-4.3576 4.347.9682.966 4.3577-4.3471-.9682-.9659Zm-8.4736 7.4864 1.9372 1.9324L5.9053 16 3 15.0341l1.9364-1.9324Z' />
    </svg>
  )
}

export default IconTreated
