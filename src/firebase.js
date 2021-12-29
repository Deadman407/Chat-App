import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAhfHwoa7Fi60_NKjyDAoeaJ8t9izL3Ayw",
    authDomain: "chat-app-d2bf7.firebaseapp.com",
    projectId: "chat-app-d2bf7",
    storageBucket: "chat-app-d2bf7.appspot.com",
    messagingSenderId: "521345131407",
    appId: "1:521345131407:web:a1801cd121576a527121fa",
    measurementId: "G-3PMGCBNK3G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db