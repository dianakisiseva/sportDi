import React from 'react'

const IconUnit = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M10 10h8.889v8.889H10V10zm0 11.111h8.889V30H10v-8.889zM21.111 10H30v8.889h-8.889V10zm0 11.111H30V30h-8.889v-8.889zm2.222-8.889v4.445h4.445v-4.445h-4.445zm0 11.111v4.445h4.445v-4.445h-4.445zm-11.11-11.11v4.444h4.444v-4.445h-4.445zm0 11.11v4.445h4.444v-4.445h-4.445z'
      />
    </svg>
  )
}

export default IconUnit
