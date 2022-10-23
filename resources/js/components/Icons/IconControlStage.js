import React from 'react'

const IconControlStage = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M20 10a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm0 15a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm10-5a1 1 0 01-1 1h-3a1 1 0 010-2h3a1 1 0 011 1zm-15 0a1 1 0 01-1 1h-3a1 1 0 010-2h3a1 1 0 011 1zm12.071 7.071a1 1 0 01-1.414 0l-2.121-2.121a1 1 0 011.414-1.414l2.121 2.12a1 1 0 010 1.415zM16.464 16.464a1 1 0 01-1.414 0l-2.12-2.12a1 1 0 111.414-1.415l2.12 2.121a1 1 0 010 1.414zM12.93 27.071a1 1 0 010-1.414l2.121-2.121a1 1 0 111.414 1.414l-2.12 2.121a1 1 0 01-1.415 0zm10.606-10.607a1 1 0 010-1.414l2.12-2.121a1 1 0 011.415 1.414l-2.121 2.121a1 1 0 01-1.414 0z'
      />
    </svg>
  )
}

export default IconControlStage
