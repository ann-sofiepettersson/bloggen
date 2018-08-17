import * as actions from '../actions/actionTypes';

export default function(state={}, action){
  switch(action.type) {
    case actions.GET_USERLIST:
      return action.payload;
    case actions.ADMIN_USERS:
      return action.payload;  
    default:
      return state;
  }
}