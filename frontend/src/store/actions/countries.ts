import { CountriesAction, CountriesActionTypes, CountryType } from '../types/countries'

const setCurrentCountry = (id: string): CountriesAction => ({
  type: CountriesActionTypes.SET_CURRENT_COUNTRY,
  payload: id,
})

const filterCountries = (searchVal: string): CountriesAction => ({
  type: CountriesActionTypes.FILTER_COUNTRIES,
  payload: searchVal,
})

const fetchCountries = (): CountriesAction => ({
  type: CountriesActionTypes.FETCH_COUNTRIES,
})

const requestedCountries = (): CountriesAction => ({
  type: CountriesActionTypes.REQUESTED_COUNTRIES,
})

const requestedCountriesSucceeded = (contries: Array<CountryType>): CountriesAction => ({
  type: CountriesActionTypes.REQUESTED_COUNTRIES_SUCCEEDED,
  payload: contries,
})

const requestedCountriesFailed = (err: string): CountriesAction => ({
  type: CountriesActionTypes.REQUESTED_COUNTRIES_FAILED,
  payload: err,
})

export default {
  setCurrentCountry,
  filterCountries,
  fetchCountries,
  requestedCountries,
  requestedCountriesSucceeded,
  requestedCountriesFailed,
}
