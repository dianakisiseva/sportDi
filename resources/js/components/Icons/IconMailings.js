import React from 'react'

const IconMailings = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <path
        className='icon'
        d='M30 28.007a1 1 0 01-.992.993H10.992a.993.993 0 01-.992-.993V27h18V15.3l-8 7.2-10-9V12a1 1 0 011-1h18a1 1 0 011 1v16.007zM12.434 13L20 19.81 27.566 13H12.434zM8 23h8v2H8v-2zm0-5h5v2H8v-2z'
      />
    </svg>
  )
}

export default IconMailings

export const IconVariable = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink'>
      <title>Icons/icon-copy</title>
      <g id='Website' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='Batilex---R4-Template-Email-List' transform='translate(-1186.000000, -784.000000)'>
          <g id='Global' transform='translate(1032.000000, 752.000000)'>
            <g id='Icons/icon-copy' transform='translate(154.000000, 32.000000)'>
              <polygon id='Path' points='0 0 16 0 16 16 0 16' />
              <path d='M4.66666667,4 L4.66666667,2 C4.66666667,1.63181017 4.9651435,1.33333333 5.33333333,1.33333333 L13.3333333,1.33333333 C13.7015232,1.33333333 14,1.63181017 14,2 L14,11.3333333 C14,11.7015232 13.7015232,12 13.3333333,12 L11.3333333,12 L11.3333333,14 C11.3333333,14.368 11.0333333,14.6666787 10.662,14.6666787 L2.67133333,14.6666787 C2.49376897,14.6677311 2.32310213,14.5979847 2.19710575,14.4728642 C2.07110938,14.3477436 2.0001742,14.1775675 2,14 L2.002,4.66666667 C2.002,4.29866667 2.302,4 2.67266667,4 L4.66666667,4 Z M3.33466667,5.33333333 L3.33333333,13.3333333 L10,13.3333333 L10,5.33333333 L3.33466667,5.33333333 Z M6,4 L11.3333333,4 L11.3333333,10.6666667 L12.6666667,10.6666667 L12.6666667,2.66666667 L6,2.66666667 L6,4 Z M4.66666667,7.33333333 L8.66666667,7.33333333 L8.66666667,8.66666667 L4.66666667,8.66666667 L4.66666667,7.33333333 Z M4.66666667,10 L8.66666667,10 L8.66666667,11.3333333 L4.66666667,11.3333333 L4.66666667,10 Z' id='Shape' fill={className === 'hover' ? '#33BAB3' : '#4D535B'} fillRule='nonzero' />
            </g>
          </g>
        </g>
      </g>
    </svg>)
}
