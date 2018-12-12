import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

import Firebase from 'firebase/app'

try {
  Firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: 'https://dsc-pens.firebaseio.com',
    projectId: 'dsc-pens',
    storageBucket: 'dsc-pens.appspot.com',
    messagingSenderId: process.env.MSG_SENDER_ID,
  })
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error(err.stack)
  }
}

export default Firebase
