import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

/**
 * ------------ from .env.local file ---------------------
 * REACT_APP_FIREBASE_API_KEY=AIzaSyA8McEpcQ7n6VHuGw2zquexWP47JAVTzL0
 * REACT_APP_FIREBASE_AUTH_DOMAIN=react-authentication-cccf9.firebaseapp.com
 * REACT_APP_FIREBASE_PROJECT_ID=react-authentication-cccf9
 * REACT_APP_FIREBASE_STORAGE_BUCKET=react-authentication-cccf9.appspot.com
 * REACT_APP_FIREBASE_MESSAGING_SENDER_ID=954475061037
 * REACT_APP_FIREBASE_APP_ID=1:954475061037:web:c4e94be7e8089d7e9d7da4
 */

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
})

export const auth = app.auth()
export const firestore = app.firestore()
export default app
