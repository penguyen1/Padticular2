import { combineReducers } from 'redux'
import users from './users'
import apts from './apts'

const appReducers = combineReducers({
  users,
  apts
})

export default appReducers