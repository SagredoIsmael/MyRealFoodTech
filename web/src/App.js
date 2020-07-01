import * as React from 'react'
import firebase from "firebase"
import constant from './constants/config'
require("firebase/firestore")

firebase.initializeApp(constant.FIREBASE)

export const firestore = firebase.firestore()

export default () => {
  return (
    <div style={{ flex: 1, height: '4rem', width: '4rem', backgroundColor: 'red' }}>

    </div>
  )
}