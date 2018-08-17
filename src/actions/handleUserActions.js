import * as actions from './actionTypes';
import firebase from '../firebase';


const dbUsers = firebase.database().ref('/userList');

export function getUserList() {
  return dispatch => {
    dispatch({
      type: actions.USERLIST_STATUS,
      payload: true
    });

    dbUsers.on('value', snapshot => {
      dispatch({
        type: actions.GET_USERLIST,
        payload: snapshot.val()
      });
      dispatch({
        type: actions.USERLIST_STATUS,
        payload: false
      });
    }, 
    () => {
      dispatch({
        type: actions.USERLIST_STATUS,
        payload: -1
      });
    });

  };
}

export function saveNewUser(newUser) {
  return dispatch => dbUsers.push(newUser);
}


export function editUser(id, edituser) {
  return dispatch => {
    dbUsers.child(id).update(edituser).then(() => dbUsers.once('value'))
    .then(snapshot => snapshot.val()) ;
  };
}

export function deleteUser(id) {
  return dispatch => dbUsers.child(id).remove();
}

export function getAdminUsers() {
  return dispatch => {
    dbUsers.ref.orderByChild('userType')
    .equalTo('Admin')
    .on('value', snapshot => {
      dispatch({
        type: actions.ADMIN_USERS,
        payload: snapshot.val()
      });
    })
  }
}