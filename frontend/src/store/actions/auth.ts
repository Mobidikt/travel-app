import {
  AuthActionTypes,
  SetIsVisibleAuthCardAction,
  RequestedLoginAction,
  FetchLoginAction,
  RequestedLoginSucceededAction,
  RequestedLoginFailedAction,
  LogoutAction,
  FetchRegistrationAction,
  RequestedRegistrationAction,
  RequestedRegistrationSucceededAction,
  RequestedRegistrationFailedAction,
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

const requestedLoginSucceeded = (token: string, photo: string): RequestedLoginSucceededAction => ({
  type: AuthActionTypes.REQUESTED_LOGIN_SUCCEEDED,
  payload: { token, photo },
})

const requestedLoginFailed = (errorMessage: string): RequestedLoginFailedAction => ({
  type: AuthActionTypes.REQUESTED_LOGIN_FAILED,
  payload: errorMessage,
})

const fetchRegistation = (
  name: string,
  email: string,
  password: string,
  photo: File | null,
): FetchRegistrationAction => ({
  type: AuthActionTypes.FETCH_REGISTRATION,
  payload: { name, email, password, photo },
})

const requestedRegistration = (): RequestedRegistrationAction => ({
  type: AuthActionTypes.REQUESTED_REGISTRATION,
})

const requestedRegistrationSucceeded = (): RequestedRegistrationSucceededAction => ({
  type: AuthActionTypes.REQUESTED_REGISTRATION_SUCCEEDED,
})

const requestedRegistrationFailed = (errorMessage: string): RequestedRegistrationFailedAction => ({
  type: AuthActionTypes.REQUESTED_REGISTRATION_FAILED,
  payload: errorMessage,
})

const logout = (): LogoutAction => ({
  type: AuthActionTypes.LOGOUT,
})

export default {
  setIsVisibleAuthCard,
  requestedLogin,
  fetchLogin,
  requestedLoginSucceeded,
  requestedLoginFailed,
  logout,
  fetchRegistation,
  requestedRegistration,
  requestedRegistrationSucceeded,
  requestedRegistrationFailed,
}
