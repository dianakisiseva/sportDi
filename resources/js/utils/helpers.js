import { parse } from 'date-fns'

export const parseQueryString = () => {
  const str = window.location.search
  const objURL = {}

  str.replace(
    new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
    function ($0, $1, $2, $3) {
      objURL[$1] = $3
    }
  )

  return objURL
}

export const objectToQuerystring = (params) => {
  let result = ''

  function convertJsonToQueryString (data, progress, name) {
    name = name || ''
    progress = progress || ''

    if (data && typeof data === 'object') {
      Object.keys(data).forEach(function (key) {
        const value = data[key]

        if (key !== 'Cell' && key !== 'Filter' && key !== 'filterMethod' && key !== 'Expander') {
          if (name === '') {
            convertJsonToQueryString(value, progress, key)
          } else {
            convertJsonToQueryString(value, progress, name + '[' + key + ']')
          }
        }
      })
    } else {
      result = result ? result.concat('&') : result.concat('?')
      result = result.concat(`${name}=${data}`)
    }
  }

  convertJsonToQueryString(params)

  return result
}

export const formatDate = (date) => {
  return date
    ? parse(date, 'dd-MM-yyyy HH:mm:ss', new Date())
    : null
}

export const isRequiredFromRules = (rules) => {
  let returnValue = false

  if (Array.isArray(rules)) {
    rules.forEach((rule) => {
      if (rule === 'required') {
        returnValue = true
      }
    })
  }

  if (typeof rules === 'string') {
    rules.split('|').forEach((rule) => {
      if (rule === 'required') {
        returnValue = true
      }
    })
  }

  return returnValue
}
