import { put, takeEvery, call } from 'redux-saga/effects'
import { CountriesActionTypes, FetchCountriesAction } from '../types/countries'
import actions from '../actions/countries'

import CountryApi from '../../services/CountryApi'

function* fetchCountries(action: FetchCountriesAction) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const currentCountryId = action.payload
  try {
    yield put(actions.requestedCountries())
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data } = yield call(CountryApi.getAll)
    yield put(actions.requestedCountriesSucceeded(data))
    if (currentCountryId) {
      yield put(actions.setCurrentCountry(currentCountryId))
    }
  } catch (error) {
    yield put(actions.requestedCountriesFailed(error))
  }
}

export default function* watchAuth() {
  yield takeEvery(CountriesActionTypes.FETCH_COUNTRIES, fetchCountries)
}
