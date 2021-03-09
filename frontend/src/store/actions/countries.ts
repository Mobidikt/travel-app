import { SetCurrentCountryAction, CountriesActionTypes, CountryType } from '../types/countries'

const setCurrentCountry = (country: CountryType): SetCurrentCountryAction => ({
  type: CountriesActionTypes.SET_CURRENT_COUNTRY,
  payload: country,
})

export default {
  setCurrentCountry,
}
