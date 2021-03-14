import INTL_SET_LANGUAGE from '../types/language'
import { SetLanguageAction } from '../actions/language'

interface LanguageState {
  language: 'en' | 'ru' | 'de';
}

let initLang: 'en' | 'ru' | 'de' = 'ru'
// eslint-disable-next-line
const loadLang = () => {
  console.log(localStorage.getItem('language'))
  if (localStorage.getItem('language') === 'en') {
    // eslint-disable-next-line
    return (initLang = 'en')
    // eslint-disable-next-line
  } else if (localStorage.getItem('language') === 'ru') {
    // eslint-disable-next-line
    return (initLang = 'ru')
  }
  initLang = 'de'
}
loadLang()
const initialState: LanguageState = {
  language: initLang || 'ru',
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
