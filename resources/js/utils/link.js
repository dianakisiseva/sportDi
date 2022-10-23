import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import classNames from 'classnames'

export const Link = ({ href, url, activeClass, method, children, className, data }) => {
  const linkClass = classNames(className, {
    [activeClass || 'active']: url && url.current === (href.replace(/^\/|\/$/g, '') || '/')
  })

  let queryParams = ''

  if ((!method || method.toLowerCase() === 'get') && !!data) {
    queryParams = `?${Object.keys(data).map(d => `${d}=${data[d]}`).join('&')}`
  }

  return (
    <InertiaLink
      href={`${href}${queryParams}`}
      className={linkClass}
      method={method || 'get'}
      data={queryParams ? null : data}
    >{children}
    </InertiaLink>
  )
}
