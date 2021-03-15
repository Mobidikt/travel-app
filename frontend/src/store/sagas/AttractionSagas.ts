import { put, takeEvery, call } from 'redux-saga/effects'
import { AttractionActionTypes, FetchAttractionAction } from '../types/attraction'
import actions from '../actions/attractions'

import AttractionsApi from '../../services/AttractionsApi'

function* fetchAttractions(action: FetchAttractionAction) {
  const id = action.payload
  try {
    yield put(actions.requestedAttractions())
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data } = yield call(() => AttractionsApi.getByCountryId(id))
    yield put(actions.requestedAttractionsSucceeded(data))
  } catch (error) {
    yield put(actions.requestedAttractionsFailed(error))
  }
}

export default function* watchAuth() {
  yield takeEvery(AttractionActionTypes.FETCH_ATTRACTIONS, fetchAttractions)
}
