import { combineReducers } from 'redux'
import userReducer from './users'
import aptsReducer from './apts'

export default combineReducers({
  userReducer,
  aptsReducer
})