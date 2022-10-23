import React from 'react'

const IconRegenerate = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
    >
      <g fill='none' fillRule='evenodd'>
        <path d='M1 1h18v18H1z' />
        <path d='M12.6667 3 16 6.5v9.8056c-.0004.3836-.2966.6944-.662.6944H4.662c-.3643-.0027-.659-.3119-.662-.6944V3.6944C4 3.3108 4.2967 3 4.662 3h8.0047Zm-4.675 4.885c-1.039.9847-1.2097 2.5778-.4031 3.7604.8066 1.1825 2.3521 1.605 3.648.9971l-.4062-.7312A2.0833 2.0833 0 0 1 7.9167 10h1.25l-1.175-2.115Zm.7716-.5275.4063.7313A2.0833 2.0833 0 0 1 12.0833 10h-1.25l1.175 2.115c1.039-.9847 1.2097-2.5778.4031-3.7604-.8066-1.1825-2.3521-1.605-3.648-.9971Z' />
        <path d='M5 5h10v10H5z' />
      </g>
    </svg>
  )
}

export default IconRegenerate
