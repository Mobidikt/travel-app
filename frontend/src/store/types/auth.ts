export interface AuthState {
  userMail: string | null;
  token: string | null;
  isLoading: boolean;
  isLoginError: boolean;
  isRegistrationError: boolean;
  errorMessage: string | null;
  isVisibleAuthCard: boolean;
}

export enum AuthActionTypes {
  FETCH_LOGIN = 'AUTH/FETCH_LOGIN',
  REQUESTED_LOGIN = 'AUTH/REQUESTED_LOGIN',
  REQUESTED_LOGIN_SUCCEEDED = 'AUTH/REQUESTED_LOGIN_SUCCEEDED',
  REQUESTED_LOGIN_FAILED = 'AUTH/REQUESTED_LOGIN_FAILED',
  SET_IS_VISIBLE_AUTH_CARD = 'AUTH/SET_IS_VISIBLE_AUTH_CARD',
}

export interface RequestedLoginAction {
  type: AuthActionTypes.REQUESTED_LOGIN;
}

export interface RequestedLoginSucceededAction {
  type: AuthActionTypes.REQUESTED_LOGIN_SUCCEEDED;
  payload: string;
}

export interface RequestedLoginFailedAction {
  type: AuthActionTypes.REQUESTED_LOGIN_FAILED;
  payload: string;
}

export interface SetIsVisibleAuthCardAction {
  type: AuthActionTypes.SET_IS_VISIBLE_AUTH_CARD;
}

export interface FetchLoginAction {
  type: AuthActionTypes.FETCH_LOGIN;
  payload: { email: string, password: string };
}

export type AuthAction =
  | RequestedLoginAction
  | RequestedLoginSucceededAction
  | RequestedLoginFailedAction
  | SetIsVisibleAuthCardAction
  | FetchLoginAction
