import { createStore, applyMiddleware } from "redux"
import { rootReducer } from './reducers'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

export const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk, logger))