import { combineReducers } from 'redux'
import authReducer from './auth'
import countriesReducer from './countries'

export const rootReducer = combineReducers({ authReducer, countriesReducer })

export type RootState = ReturnType<typeof rootReducer>
