import { all } from 'redux-saga/effects'

import watchAuth from './authSagas'
import watchCountries from './CountriesSagas'
import watchAttractions from './AttractionSagas'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* watchSagas() {
  yield all([watchAuth(), watchCountries(), watchAttractions()])
}
