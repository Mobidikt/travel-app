import INTL_SET_LANGUAGE from '../types/language'
import { SetLanguageAction } from '../actions/language'

interface LanguageState {
  language: 'en' | 'ru' | 'de';
}

const initialState: LanguageState = {
  language: 'en',
}

const reducer = (state = initialState, action: SetLanguageAction): LanguageState => {
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
