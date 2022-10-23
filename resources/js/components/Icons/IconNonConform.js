import React from 'react'

const IconNonConform = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M20.436 11L26 16.567v7.87L20.436 30h-7.87L7 24.436v-7.87L12.566 11h7.87zm-.829 2h-6.213l-4.393 4.395v6.213l4.393 4.394h6.213l4.394-4.394v-6.214l-4.394-4.393V13zM32 26v2h-4v-2h4zm0-4v2h-4v-2h4zm-11.5-2.5v2h-8v-2h8zM32 18v2h-4v-2h4zm0-4v2h-4v-2h4z'
      />
    </svg>
  )
}

export default IconNonConform
