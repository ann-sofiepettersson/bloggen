import * as firebase from 'firebase'


const config = {
  apiKey: "AIzaSyDwmvxqwJ7zQwOpf7R4P8_sdHLD8Z5iuWU",
  authDomain: "social-app-20204.firebaseapp.com",
  databaseURL: "https://social-app-20204.firebaseio.com",
  projectId: "social-app-20204",
  storageBucket: "",
  messagingSenderId: "905600290527"
};
firebase.initializeApp(config);

export default firebase;