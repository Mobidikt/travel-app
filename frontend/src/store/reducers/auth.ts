import { AuthState, AuthActionTypes, AuthAction } from '../types/auth'

const initialState: AuthState = {
  userMail: null,
  token: null,
  isLoading: false,
  isLoginError: false,
  isRegistrationError: false,
  errorMessage: null,
  isVisibleAuthCard: false,
}

const reducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.REQUESTED_LOGIN: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case AuthActionTypes.REQUESTED_LOGIN_SUCCEEDED: {
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        token: action.payload,
        isLoading: false,
      }
    }

    case AuthActionTypes.REQUESTED_LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        isLoginError: true,
        errorMessage: action.payload,
      }
    }

    case AuthActionTypes.SET_IS_VISIBLE_AUTH_CARD: {
      return {
        ...state,
        isVisibleAuthCard: !state.isVisibleAuthCard,
      }
    }

    default:
      return state
  }
}

export default reducer
