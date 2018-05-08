import * as actions from './actionTypes';
import firebase from '../firebase';

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();


export function googleLogin() {
  return dispatch => auth.signInWithPopup(googleProvider);
}



export function emailLogin(email, password) {
  return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function emailSignup(email, password) {
  return dispatch => auth.createUserWithEmailAndPassword(email, password);
}

// export function emailRegister(email, password) {
//   return dispatch => auth.createUserWithEmailAndPassword(email, password)
//   .then((res) => {
//     return dispatch(registerSuccess(res));
//   })
// }

export function logout() {
  return dispatch => auth.signOut();
}

export function getUser() {
  return dispatch => {
    dispatch({
      type: actions.USER_STATUS,
      payload: true
    });
    auth.onAuthStateChanged(user => {
      dispatch({
        type: actions.GET_USER,
        payload: user
      });
      dispatch({
        type: actions.USER_STATUS,
        payload: false
      });
    }, 
    () => {
      dispatch({
        type: actions.USER_STATUS,
        payload: -1
      });
    });
  }
}