import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import friendsReducer from './friendsReducers';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsNames: friendsReducer,
});

let store = createStore(reducers);

export default store;
