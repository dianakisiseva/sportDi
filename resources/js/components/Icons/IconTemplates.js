import React from 'react'

const IconTemplates = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M10 11.993a1 1 0 01.992-.993h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H10.992a.993.993 0 01-.992-.993V11.993zM12 13v14h16V13H12zm2 2h6v6h-6v-6zm2 2v2h2v-2h-2zm-2 6h12v2H14v-2zm8-8h4v2h-4v-2zm0 4h4v2h-4v-2z'
      />
    </svg>
  )
}

export default IconTemplates
