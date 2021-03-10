import { CountriesAction, CountriesActionTypes } from '../types/countries'

const setCurrentCountry = (id: number): CountriesAction => ({
  type: CountriesActionTypes.SET_CURRENT_COUNTRY,
  payload: id,
})

const filterCountries = (searchVal: string): CountriesAction => ({
  type: CountriesActionTypes.FILTER_COUNTRIES,
  payload: searchVal,
})

export default {
  setCurrentCountry,
  filterCountries,
}
