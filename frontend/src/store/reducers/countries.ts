/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CountriesAction, CountriesActionTypes, CountriesState } from '../types/countries'

const cointriesFromStorage: string | null = localStorage.getItem('countries')

const initCountries = cointriesFromStorage ? JSON.parse(cointriesFromStorage) : []

const initialState: CountriesState = {
  countries: initCountries,
  isLoading: false,
  error: null,
  currentCountry: null,
}

const reducer = (state = initialState, action: CountriesAction): CountriesState => {
  switch (action.type) {
    case CountriesActionTypes.REQUESTED_COUNTRIES: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case CountriesActionTypes.REQUESTED_COUNTRIES_SUCCEEDED: {
      localStorage.setItem('countries', JSON.stringify(action.payload))
      return {
        ...state,
        isLoading: false,
        countries: action.payload,
      }
    }

    case CountriesActionTypes.REQUESTED_COUNTRIES_FAILED: {
      return {
        ...state,
        error: action.payload,
      }
    }

    case CountriesActionTypes.SET_CURRENT_COUNTRY: {
      const newCurrentCountry = state.countries.find((country) => country.id === action.payload)
      return {
        ...state,
        currentCountry: newCurrentCountry || null,
      }
    }
    case CountriesActionTypes.FILTER_COUNTRIES: {
      const regExp = new RegExp(action.payload, 'ig')
      // eslint-disable-next-line
      const newCountries = initialState.countries.filter((country) => {
        if (regExp.test(country.country) || regExp.test(country.capital)) {
          return country
        }
      })
      return {
        ...state,
        countries: newCountries.length ? newCountries : state.countries,
      }
    }
    default:
      return state
  }
}

export default reducer
