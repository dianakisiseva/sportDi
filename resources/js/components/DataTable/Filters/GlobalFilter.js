import React, { useEffect, useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import { IconSearch } from '../../../components'

// Define a default UI for filtering
function GlobalFilter ({
  globalFilter,
  setGlobalFilter
}) {
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  useEffect(() => {
    setValue(globalFilter)
  }, [globalFilter])

  return (
    <div className='input-element input-text input-search'>
      <label htmlFor='global-search'>Search</label>
      <div className='input-container'>
        <input
          type='text'
          id='global-search'
          value={value || ''}
          onChange={e => {
            setValue(e.target.value)
            onChange(e.target.value)
          }}
          placeholder='search here...'
        />
        <IconSearch className='icon-small' />
      </div>
    </div>

  )
}

export default GlobalFilter
