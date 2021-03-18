import INTL_SET_LANGUAGE from '../types/language'

export type SetLanguageAction = {
  type: typeof INTL_SET_LANGUAGE,
  payload: 'en' | 'ru' | 'de',
}

export const setLanguage = (language: 'en' | 'ru' | 'de'): SetLanguageAction => ({
  type: INTL_SET_LANGUAGE,
  payload: language,
})
