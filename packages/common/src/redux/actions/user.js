import { SUCCESS_LOGIN, SET_DATA_USER, ERROR_LOGIN, LOG_OUT} from './types'
import constants from '../../constants/fetch'
import { fetchRequestWrapper } from './requests'
import { getUsername, getEmail, getPassword} from '../selectors/user' 

export const fetchLoginSuccess = token => ({
  type: SUCCESS_LOGIN,
  token
})

export const fetchLoginError = error => ({
  type: ERROR_LOGIN,
  error
})

export const setDataUser = data => ({
  type: SET_DATA_USER,
  data
})

export const logOut = () => ({
  type: LOG_OUT
})

export const fetchLogin = () => (dispatch, getState) => {
  dispatch(fetchRequestWrapper({
    requestType: constants.REQUEST_LOGIN,
    customRoute: 
    constants.API_URL + 
    constants.LOGIN_URL_FETCH + 
    getEmail(getState()) + "/" + getPassword(getState()),
    onSuccess: (json) => json && dispatch(fetchLoginSuccess(json)),
    onError: (error) => dispatch(fetchLoginError(error)),
    fetchOptions: {
      method: constants.LOGIN_METHOD_FETCH,
      headers: constants.DEFAULT_HEADER,
    },
  }))
}

export const fetchSignUpWithExternalProvider = (body) => (dispatch, getState) => {
  dispatch(fetchRequestWrapper({
    requestType: constants.REQUEST_SIGN_UP,
    customRoute: 
    constants.API_URL + 
    constants.SIGN_UP_EXTERNAL_URL_FETCH,
    onSuccess: (json) => json && dispatch(fetchLoginSuccess(json)),
    onError: (error) => dispatch(fetchLoginError(error)),
    fetchOptions: {
      method: constants.SIGN_UP_METHOD_FETCH,
      headers: constants.DEFAULT_HEADER,
      body: JSON.stringify(body)
    },
  }))
}
  

export const fetchSignUp = () => (dispatch, getState) => {
  const body =  {
    'name': getUsername(getState()),
    'mail': getEmail(getState()),
    'password' : getPassword(getState())
  }
  
  dispatch(fetchRequestWrapper({
    requestType: constants.REQUEST_SIGN_UP,
    customRoute: 
    constants.API_URL + 
    constants.SIGN_UP_URL_FETCH,
    onSuccess: (json) => json && dispatch(fetchLoginSuccess(json)),
    onError: (error) => dispatch(fetchLoginError(error)),
    fetchOptions: {
      method: constants.SIGN_UP_METHOD_FETCH,
      headers: constants.DEFAULT_HEADER,
      body: JSON.stringify(body)
    },
  }))
}