import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsPage from './dialogsReducer';
import friendsReducer from './friendsReducers';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsPage,
  friendsNames: friendsReducer,
});

let store = createStore(reducers);

export default store;
