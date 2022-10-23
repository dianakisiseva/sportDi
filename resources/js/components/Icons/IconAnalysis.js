import React from 'react'

const IconAnalysis = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M26.324 8a1 1 0 01.994.883l.006.117a1 1 0 01-.883.993l-.117.007h-.7v15.663a6 6 0 01-5.775 5.996l-.225.004a6 6 0 01-5.996-5.775l-.004-.225V10H13l-.133-.007c-1.156-.124-1.156-1.862 0-1.986L13 8h13.324zm-2.7 2h-8v15.663a4 4 0 003.8 3.995l.2.005a4 4 0 003.995-3.8l.005-.2v-1.001h-3v-2h3v-2h-3v-2h3v-2h-3v-2h3V10z'
      />
    </svg>
  )
}

export default IconAnalysis
