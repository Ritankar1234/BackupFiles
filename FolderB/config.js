import firebase from 'firebase'
require('@firebase/firestore')
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDcpTuSXshj9NgATXGDFcA9CQo6Q7HaHnI",
    authDomain: "booksanta-bc314.firebaseapp.com",
    databaseURL: "https://booksanta-bc314.firebaseio.com",
    projectId: "booksanta-bc314",
    storageBucket: "booksanta-bc314.appspot.com",
    messagingSenderId: "748930961660",
    appId: "1:748930961660:web:193019a500f80155e80779"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()