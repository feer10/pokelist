// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAX26fsax4yQQ1dQ2Nj8UdQ7JWW45CAp1w',
  authDomain: 'pokelist-fer.firebaseapp.com',
  projectId: 'pokelist-fer',
  storageBucket: 'pokelist-fer.appspot.com',
  messagingSenderId: '212139191277',
  appId: '1:212139191277:web:5272d745b120d59d7495e4',
  measurementId: 'G-83QEHPSXYF',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app)
