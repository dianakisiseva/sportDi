import axios from 'axios'

export const api = axios

api.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response && (error.response.status === 401 || error.response.status === 419)) {
    window.location.replace(`/error/${error.response.status}`)

    return false
  } else {
    return Promise.reject(error)
  }
})
