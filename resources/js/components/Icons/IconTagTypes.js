import React from 'react'

const IconTagTypes = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M15 15v-4a1 1 0 011-1h13a1 1 0 011 1v13a1 1 0 01-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H11.007A1.006 1.006 0 0110 28.993l.003-12.986c0-.556.449-1.007 1.007-1.007H15zm2 0h6.993c.556 0 1.007.449 1.007 1.007V23h3V12H17v3zm6 2H12.003L12 28h11V17zm-6.497 9l-3.536-3.536 1.414-1.414 2.122 2.122 4.242-4.243 1.414 1.414L16.503 26z'
      />
    </svg>
  )
}

export default IconTagTypes
