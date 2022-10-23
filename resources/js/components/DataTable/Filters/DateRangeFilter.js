import React, { useState, useEffect } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import i18n from 'i18next'
import { enGB, fr } from 'date-fns/esm/locale'
import { format, isAfter } from 'date-fns'

const locale = {
  en: enGB,
  fr: fr
}

registerLocale(i18n.language, locale[i18n.language])

function DateRangeFilter ({
  column: { Header, filterValue, setFilter, filterSettings, id }
}) {
  const [startDate, setStartDate] = useState(filterValue?.startDate)
  const [endDate, setEndDate] = useState(filterValue?.endDate)
  const { labels } = filterSettings

  useEffect(() => {
    if (!filterValue) {
      setStartDate(null)
      setEndDate(null)
    }
  }, [filterValue])

  const onChangeStartDate = date => {
    setStartDate(date)

    if (!!endDate && isAfter(date, endDate)) {
      setEndDate(null)
    }

    if (!!date || !!endDate) {
      setFilter({
        startDate: date ? format(date, 'yyyy-MM-dd') : '',
        endDate: endDate ? format(endDate, 'yyyy-MM-dd') : ''
      })
    } else {
      setFilter(null)
    }
  }

  const onChangeEndDate = date => {
    setEndDate(date)

    if (!!date || !!startDate) {
      setFilter({
        startDate: startDate ? format(startDate, 'yyyy-MM-dd') : '',
        endDate: date ? format(date, 'yyyy-MM-dd') : ''
      })
    } else {
      setFilter(null)
    }
  }

  return (
    <>
      <div className='col-3'>
        <div className='input-element input-text'>
          <label htmlFor='global-search'>{labels.startDate}</label>
          <div className='input-container'>
            <DatePicker
              locale={i18n.language}
              selected={startDate}
              onChange={onChangeStartDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat='dd-MM-yyyy'
              isClearable
            />
          </div>
        </div>
      </div>

      <div className='col-3'>
        <div className='input-element input-text'>
          <label htmlFor='global-search'>{labels.endDate}</label>
          <div className='input-container'>
            <DatePicker
              locale={i18n.language}
              selected={endDate}
              onChange={onChangeEndDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat='dd-MM-yyyy'
              isClearable
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DateRangeFilter
