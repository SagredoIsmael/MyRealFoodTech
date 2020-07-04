import {combineReducers} from 'redux'
import settings from './settings'
import request from './requests'
import user from './user'

export default combineReducers({
  settings,
  request,
  user
})
