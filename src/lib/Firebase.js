import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

import Firebase from 'firebase/app'

const { API_KEY, AUTH_DOMAIN, MSG_SENDER_ID } = process.env

try {
  Firebase.initializeApp({
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: 'https://dsc-pens.firebaseio.com',
    projectId: 'dsc-pens',
    storageBucket: 'dsc-pens.appspot.com',
    messagingSenderId: MSG_SENDER_ID,
  })
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error(err.stack)
  }
}

export default Firebase
