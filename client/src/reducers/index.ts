import { combineReducers } from 'redux'
import auth from './auth'
import earningGroups from './earningGroups'
import earnings from './earnings'

export default combineReducers({
  auth,
  earningGroups,
  earnings,
})
