import { combineReducers } from 'redux'
import authReducer from './auth'
import countriesReducer from './countries'
import language from './language'

export const rootReducer = combineReducers({ authReducer, countriesReducer, language })

export type RootState = ReturnType<typeof rootReducer>
