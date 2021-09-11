import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBXWlgAE_X0VYz07EmlK9NnyBcC0hkjlzo",
    authDomain: "tinder-clone-97fc6.firebaseapp.com",
    projectId: "tinder-clone-97fc6",
    storageBucket: "tinder-clone-97fc6.appspot.com",
    messagingSenderId: "469241999530",
    appId: "1:469241999530:web:b8f05dc1732d31350ce0d3",
    measurementId: "G-PX2G73W1D1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;