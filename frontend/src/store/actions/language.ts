import INTL_SET_LANGUAGE from '../types/language'

export type SetLanguageAction = {
  type: typeof INTL_SET_LANGUAGE,
  payload: string,
}

export const setLanguage = (language: string): SetLanguageAction => ({
  type: INTL_SET_LANGUAGE,
  payload: language,
})
