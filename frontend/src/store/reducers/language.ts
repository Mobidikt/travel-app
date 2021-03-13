import INTL_SET_LANGUAGE from '../types/language'
import { SetLanguageAction } from '../actions/language'

const initialState = {
  language: localStorage.getItem('language') || 'en',
}

const reducer = (state = initialState, action: SetLanguageAction) => {
  switch (action.type) {
    case INTL_SET_LANGUAGE: {
      localStorage.setItem('language', action.payload)
      return {
        language: action.payload,
      }
    }

    default:
      return state
  }
}

export default reducer
