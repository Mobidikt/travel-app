import { AuthState, AuthActionTypes, AuthAction } from '../types/auth'

const initialState: AuthState = {
  userPhoto: localStorage.getItem('photo') || null,
  username: localStorage.getItem('username') || null,
  token: localStorage.getItem('token') || null,
  isLoading: false,
  isLoginError: false,
  isRegistrationError: false,
  errorMessage: null,
  isVisibleAuthCard: false,
  isVisibleProfile: false,
  isRegistrated: false,
  email: localStorage.getItem('email') || null,
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
      const { token, photo, email, username } = action.payload
      console.log(action.payload)
      localStorage.setItem('token', token)
      if (action.payload.photo) {
        localStorage.setItem('photo', photo)
      }
      localStorage.setItem('email', email)
      localStorage.setItem('username', username)
      return {
        ...state,
        token: action.payload.token,
        userPhoto: action.payload.photo,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        email: action.payload.email,
        username: action.payload.username,
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

    case AuthActionTypes.SET_IS_VISIBLE_PROFILE_CARD: {
      return {
        ...state,
        isVisibleProfile: !state.isVisibleProfile,
      }
    }

    case AuthActionTypes.REQUESTED_REGISTRATION: {
      return {
        ...state,
        isLoading: true,
        isRegistrated: false,
      }
    }

    case AuthActionTypes.REQUESTED_REGISTRATION_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        isRegistrated: true,
      }
    }

    case AuthActionTypes.REQUESTED_REGISTRATION_FAILED: {
      return {
        ...state,
        errorMessage: action.payload,
        isRegistrationError: true,
      }
    }

    case AuthActionTypes.LOGOUT: {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      localStorage.removeItem('photo')
      localStorage.removeItem('username')
      return {
        ...state,
        userPhoto: null,
        token: null,
        email: null,
      }
    }

    case AuthActionTypes.CLEAR_ERRORS: {
      return {
        ...state,
        errorMessage: null,
        isLoginError: false,
        isRegistrated: false,
      }
    }

    default:
      return state
  }
}

export default reducer
