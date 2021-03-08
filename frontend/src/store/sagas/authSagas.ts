/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { put, takeEvery } from 'redux-saga/effects'
import { AuthActionTypes, FetchLoginAction } from '../types/auth'
import authActions from '../actions/auth'

function* login(action: FetchLoginAction) {
  const { email, password } = action.payload
  console.log(email, password)

  try {
    yield put(authActions.requestedLogin())
    const token = 'token'
    yield put(authActions.requestedLoginSucceeded(token))
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data } = error.response
    yield put(authActions.requestedLoginFailed(data.message))
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* watchAuth() {
  yield takeEvery(AuthActionTypes.FETCH_LOGIN, login)
}
