import authActions from './auth'
import countriesActions from './countries'
import { setLanguage } from './language'

export default {
  ...authActions,
  ...countriesActions,
  setLanguage,
}
