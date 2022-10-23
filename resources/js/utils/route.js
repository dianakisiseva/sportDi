export const route = (string, params) => {
  if (params && Object.keys(params).length > 0) {
    Object.keys(params).forEach(function (key, i) {
      if (params[key] !== undefined && params[key] !== null) {
        string = string.replace(new RegExp('%' + key + '%', 'g'), params[key])
      }
    })
  }

  return string
}
