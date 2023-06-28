import axios from 'axios'
import store from '../store'

axios.interceptors.request.use((request) => {
  const state = store.getState()
  const { token } = state.authReducer
  const { language } = state.language

  if (token) {
    // eslint-disable-next-line
    request.headers.common.Authorization = token
  }

  if (language) {
    // eslint-disable-next-line
    request.headers.common['Language-Code'] = language
  }

  return request
})
