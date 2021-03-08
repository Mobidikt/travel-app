import {
  AuthActionTypes,
  SetIsVisibleAuthCardAction,
  RequestedLoginAction,
  FetchLoginAction,
  RequestedLoginSucceededAction,
  RequestedLoginFailedAction,
} from '../types/auth'

const setIsVisibleAuthCard = (): SetIsVisibleAuthCardAction => ({
  type: AuthActionTypes.SET_IS_VISIBLE_AUTH_CARD,
})

const fetchLogin = (email: string, password: string): FetchLoginAction => ({
  type: AuthActionTypes.FETCH_LOGIN,
  payload: { email, password },
})

const requestedLogin = (): RequestedLoginAction => ({
  type: AuthActionTypes.REQUESTED_LOGIN,
})

const requestedLoginSucceeded = (token: string): RequestedLoginSucceededAction => ({
  type: AuthActionTypes.REQUESTED_LOGIN_SUCCEEDED,
  payload: token,
})

const requestedLoginFailed = (errorMessage: string): RequestedLoginFailedAction => ({
  type: AuthActionTypes.REQUESTED_LOGIN_FAILED,
  payload: errorMessage,
})

export default {
  setIsVisibleAuthCard,
  requestedLogin,
  fetchLogin,
  requestedLoginSucceeded,
  requestedLoginFailed,
}
