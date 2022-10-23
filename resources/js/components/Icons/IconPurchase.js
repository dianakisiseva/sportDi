import React from 'react'

const IconPurchase = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M13.243 13.657L10 10.415 11.415 9l3.242 3.243h15.242a1 1 0 01.958 1.287l-2.4 8a1 1 0 01-.958.713H15.243v2h11v2h-12a1 1 0 01-1-1V13.657zm2 .586v6h11.512l1.8-6H15.243zm-.5 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm12 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'
      />
    </svg>
  )
}

export default IconPurchase
