import { 
  createStore, 
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import posts from '../reducers/blogReducer';
import user from '../reducers/userReducer';
import loading from '../reducers/loadingReducer';


const rootReducer = combineReducers({   
  posts,
  user,
  loading
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);


export default store;