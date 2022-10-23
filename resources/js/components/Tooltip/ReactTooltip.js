import React from 'react'
import Tooltip from 'react-simple-tooltip'

const ReactTooltip = ({ className, content, placement, children, style, background, padding, border, color, arrow }) => {
  return (
    <Tooltip
      className={className ?? ''}
      content={content}
      placement={placement ?? 'left'}
      radius={5}
      padding={padding ?? 10}
      background={background ?? '#000'}
      border={border ?? '#000'}
      color={color ?? '#fff'}
      arrow={arrow ?? 15}
      fadeDuration={300}
      fadeEasing='ease-in-out'
      style={style ?? { whiteSpace: 'nowrap', fontFamily: 'Klima-Regular, sans-serif', fontSize: '0.875rem' }}
    >
      {children}
    </Tooltip>
  )
}

export default ReactTooltip
