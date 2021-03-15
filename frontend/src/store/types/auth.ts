export interface AuthState {
  userPhoto: string | null;
  token: string | null;
  isLoading: boolean;
  isLoginError: boolean;
  isRegistrationError: boolean;
  errorMessage: string | null;
  isVisibleAuthCard: boolean;
  isRegistrated: boolean;
  email: string | null;
}

export enum AuthActionTypes {
  FETCH_LOGIN = 'AUTH/FETCH_LOGIN',
  REQUESTED_LOGIN = 'AUTH/REQUESTED_LOGIN',
  REQUESTED_LOGIN_SUCCEEDED = 'AUTH/REQUESTED_LOGIN_SUCCEEDED',
  REQUESTED_LOGIN_FAILED = 'AUTH/REQUESTED_LOGIN_FAILED',
  FETCH_REGISTRATION = 'AUTH/FETCH_REGISTRATION',
  REQUESTED_REGISTRATION = 'AUTH/REQUESTED_REGISTRATION',
  REQUESTED_REGISTRATION_SUCCEEDED = 'AUTH/REQUESTED_REGISTRATION_SUCCEEDED',
  REQUESTED_REGISTRATION_FAILED = 'AUTH/REQUESTED_REGISTRATION_FAILED',
  SET_IS_VISIBLE_AUTH_CARD = 'AUTH/SET_IS_VISIBLE_AUTH_CARD',
  LOGOUT = 'AUTH/LOGOUT',
  CLEAR_ERRORS = 'AUTH/CLEAR_ERRORS',
}

export interface RequestedLoginAction {
  type: AuthActionTypes.REQUESTED_LOGIN;
}

export interface RequestedLoginSucceededAction {
  type: AuthActionTypes.REQUESTED_LOGIN_SUCCEEDED;
  payload: { token: string, photo: string, email: string };
}

export interface RequestedLoginFailedAction {
  type: AuthActionTypes.REQUESTED_LOGIN_FAILED;
  payload: string;
}

export interface FetchLoginAction {
  type: AuthActionTypes.FETCH_LOGIN;
  payload: { email: string, password: string };
}
export interface SetIsVisibleAuthCardAction {
  type: AuthActionTypes.SET_IS_VISIBLE_AUTH_CARD;
}

export interface RequestedRegistrationAction {
  type: AuthActionTypes.REQUESTED_REGISTRATION;
}

export interface RequestedRegistrationSucceededAction {
  type: AuthActionTypes.REQUESTED_REGISTRATION_SUCCEEDED;
}

export interface RequestedRegistrationFailedAction {
  type: AuthActionTypes.REQUESTED_REGISTRATION_FAILED;
  payload: string;
}

export interface FetchRegistrationAction {
  type: AuthActionTypes.FETCH_REGISTRATION;
  payload: { name: string, email: string, password: string, photo: File | null };
}

export interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export interface ClearAction {
  type: AuthActionTypes.CLEAR_ERRORS;
}

export type AuthAction =
  | RequestedLoginAction
  | RequestedLoginSucceededAction
  | RequestedLoginFailedAction
  | SetIsVisibleAuthCardAction
  | FetchLoginAction
  | LogoutAction
  | FetchRegistrationAction
  | RequestedRegistrationFailedAction
  | RequestedRegistrationSucceededAction
  | RequestedRegistrationAction
  | ClearAction
