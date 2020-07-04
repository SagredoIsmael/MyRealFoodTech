import * as React from 'react'
import firebase from "firebase"
import config from './constants/config'
import colors from 'commons/src/constants/colors'
require("firebase/firestore")

firebase.initializeApp(config.FIREBASE)

export const firestore = firebase.firestore()

export default () =>
<div style={{ flex: 1, height: '4rem', width: '4rem', backgroundColor: colors.primary }}> 

</div>


  