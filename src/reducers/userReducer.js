import * as actions from '../actions/actionTypes';

export default function(state={}, action){
  switch(action.type) {
    case actions.GET_USER:
      return action.payload;
    default:
      return state;
  }
}