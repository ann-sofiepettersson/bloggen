import * as actions from './actionTypes';
import firebase from '../firebase';


const dbUsers = firebase.database().ref('/users');

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();


export function googleLogin() {
  return dispatch => auth.signInWithPopup(googleProvider);
}

export function emailLogin(email, password) {
  return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function emailSignup(email, password) {
  return dispatch => {auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      
      const newUser = {
        userId: user.uid,
        email: user.email,
        userType: null
      };
    
      if (user !== null)
      dbUsers.ref('/users')
      .push(newUser)
    
    });
  };
}

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




// export function getUserList() {
//   return dispatch => {
//     dispatch({
//       type: actions.USERLIST_STATUS,
//       payload: true
//     });

//     dbUsers.on('value', snapshot => {
//       dispatch({
//         type: actions.GET_USERLIST,
//         payload: snapshot.val()
//       });
//       dispatch({
//         type: actions.USERLIST_STATUS,
//         payload: false
//       });
//     }, 
//     () => {
//       dispatch({
//         type: actions.USERLIST_STATUS,
//         payload: -1
//       });
//     });

//   };
// }

// export function editUserType(id, userType) {
//   return dispatch => {
//     dbUsers.child(id).update(userType).then(() => dbUsers.once('value'))
//     .then(snapshot => snapshot.val()) ;
//   };
// }



// export function deleteUser(id) {
//   return dispatch => dbAdmin.child(id).remove();
// }