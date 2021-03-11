import INTL_SET_LANGUAGE from '../types/language'

const setLanguage = (language: string) => ({
  type: INTL_SET_LANGUAGE,
  payload: { language },
})

export default setLanguage
