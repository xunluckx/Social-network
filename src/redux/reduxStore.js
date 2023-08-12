import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsPage from './dialogsReducer';
import friendsReducer from './friendsReducers';
import usersReducer from './usersReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsPage,
  friendsNames: friendsReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
