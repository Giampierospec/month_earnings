import { combineReducers } from 'redux'
import auth from './auth'
import earningGroups from './earningGroups'

export default combineReducers({
  auth,
  earningGroups,
})
