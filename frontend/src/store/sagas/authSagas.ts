/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { call, put, takeEvery } from 'redux-saga/effects'
import { AuthActionTypes, FetchLoginAction, FetchRegistrationAction } from '../types/auth'
import authActions from '../actions/auth'
import AuthApi from '../../services/AuthApi'

function* login(action: FetchLoginAction) {
  const { email, password } = action.payload

  try {
    yield put(authActions.requestedLogin())
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data } = yield call(() => AuthApi.login(email, password))
    yield put(authActions.requestedLoginSucceeded(data.token, data.photo, data.email))
    yield put(authActions.setIsVisibleAuthCard())
    yield put(authActions.clearErros())
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data } = error.response
    yield put(authActions.requestedLoginFailed(data.message))
  }
}

function* register(action: FetchRegistrationAction) {
  const { name, email, password, photo } = action.payload
  try {
    yield put(authActions.requestedRegistration())
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    yield call(() => AuthApi.register(name, email, password, photo))
    yield put(authActions.requestedRegistrationSucceeded())
    yield put(authActions.setIsVisibleAuthCard())
    yield put(authActions.clearErros())
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data } = error.response
    yield put(authActions.requestedRegistrationFailed(data.message))
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* watchAuth() {
  yield takeEvery(AuthActionTypes.FETCH_LOGIN, login)
  yield takeEvery(AuthActionTypes.FETCH_REGISTRATION, register)
}
