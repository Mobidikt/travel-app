import authActions from './auth'
import countriesActions from './countries'
import attractionsActions from './attractions'
import { setLanguage } from './language'

export default {
  ...authActions,
  ...countriesActions,
  ...attractionsActions,
  setLanguage,
}
