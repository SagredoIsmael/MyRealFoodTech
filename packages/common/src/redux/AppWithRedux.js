import React from 'react'
import { Provider } from 'react-redux'
import { store } from './configureStore'

export default ({ App }) =>
    <Provider store={store}>
        <App />
    </Provider>