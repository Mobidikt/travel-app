import { SetCurrentCountryAction, CountriesActionTypes } from '../types/countries'

const setCurrentCountry = (id: number): SetCurrentCountryAction => ({
  type: CountriesActionTypes.SET_CURRENT_COUNTRY,
  payload: id,
})

export default {
  setCurrentCountry,
}
