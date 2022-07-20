import { combineReducers } from 'redux'
import auth from './auth'
import group from './group'

export default combineReducers({
  auth,
  group,
})
