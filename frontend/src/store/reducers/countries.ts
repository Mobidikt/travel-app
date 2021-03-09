import { CountriesAction, CountriesActionTypes, CountriesState } from '../types/countries'

const initialState: CountriesState = {
  countries: [],
  isLoading: false,
  isError: false,
  currentCountry: null,
}

const reducer = (state = initialState, action: CountriesAction): CountriesState => {
  switch (action.type) {
    case CountriesActionTypes.SET_CURRENT_COUNTRY: {
      return {
        ...state,
        currentCountry: action.payload,
      }
    }
    default:
      return state
  }
}

export default reducer
