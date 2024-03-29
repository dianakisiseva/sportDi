import React from 'react'

const IconVaccination = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M29.678 15.98l-1.415 1.413-2.12-2.12-2.122 2.12 3.535 3.536-1.414 1.414-.707-.707L19.071 28h-5.657l-2.121 2.121-1.414-1.414L12 26.586v-5.657l6.364-6.364-.707-.707 1.414-1.414 3.536 3.535 2.12-2.121-2.12-2.121 1.414-1.415 5.657 5.657v.001zm-5.657 4.242l-4.243-4.243-1.414 1.414 2.121 2.122-1.414 1.414-2.121-2.121-1.414 1.414 2.12 2.121-1.413 1.414-2.122-2.121-.121.121V26h4.243l5.778-5.778z'
      />
    </svg>
  )
}

export default IconVaccination
