import * as actions from './actionTypes';
import firebase from '../firebase';

const db = firebase.database().ref('/posts');
 

export function getPosts() {
  return dispatch => {
    dispatch({
      type: actions.POSTS_STATUS,
      payload: true
    });

    db.on('value', snapshot => {
      dispatch({
        type: actions.GET_POSTS,
        payload: snapshot.val()
      });
      dispatch({
        type: actions.POSTS_STATUS,
        payload: false
      });
    }, 
    () => {
      dispatch({
        type: actions.POSTS_STATUS,
        payload: -1
      });
    });

  };
}

export function savePost(post) {
  return dispatch => db.push(post);
}

export function deletePost(id) {
  return dispatch => db.child(id).remove();
}

export function editPost(id, post) {
  return dispatch => {
    db.child(id).update(post);
  };
}

export function saveComment(postId, comment) {
  return dispatch => {
    db.child(postId).child('comments').push(comment);
  };
}

export function deleteComment(postId, commentId) {
  return dispatch => {
    db.child(postId).child('comments').child(commentId).remove();
  }
}

