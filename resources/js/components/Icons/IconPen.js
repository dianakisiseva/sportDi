import React from 'react'

const IconPen = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
    >
      <defs>
        <path
          d='M4.8557 12.3914H14V14H0v-3.4126L7.7 2.625l3.2993 3.4134-6.1444 6.353h.0008ZM8.75 1.9044 10.4233.231a.7885.7885 0 0 1 1.115 0l2.2308 2.2312a.7888.7888 0 0 1 0 1.1151L12.0958 5.25l-3.345-3.3455H8.75Z'
          id='pen1'
        />
      </defs>
      <g transform='translate(3 3)'>
        <mask id='pen2'>
          <use xlinkHref='#pen1' />
        </mask>
        <path mask='url(#pen2)' d='M-3-3h20v20H-3z' />
      </g>
    </svg>
  )
}

export default IconPen
