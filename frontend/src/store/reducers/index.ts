import { combineReducers } from 'redux'
import authReducer from './auth'
import countriesReducer from './countries'
import attractionsReducer from './attractions'
import language from './language'

export const rootReducer = combineReducers({
  authReducer,
  countriesReducer,
  attractionsReducer,
  language,
})

export type RootState = ReturnType<typeof rootReducer>
