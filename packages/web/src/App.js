import * as React from 'react'
import firebase from "firebase"
import config from './constants/config'
import colors from 'commons/src/constants/colors'
import { Provider } from 'react-redux'
import { store } from './redux/configStore'

require("firebase/firestore")

firebase.initializeApp(config.FIREBASE)

export const firestore = firebase.firestore()

export default () =>
    <Provider store={store}>
        <div style={{ flex: 1, height: '4rem', width: '4rem', backgroundColor: colors.primary }}/>
    </Provider>



