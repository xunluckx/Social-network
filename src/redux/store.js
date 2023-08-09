//import messagesReducer from './messagesReducer';
//import profileReducer from './profileReducer';
//import friendsReducer from './friendsReducers';

//const store = {
//  _state: {
//    profilePage: {
//      posts: [
//        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
//        { id: 2, message: 'It`s my first post', likesCount: 11 },
//        { id: 3, message: '121121121', likesCount: 13 },
//        { id: 4, message: '1412414124', likesCount: 14 },
//        { id: 4, message: '1412414124', likesCount: 15 },
//      ],
//      newPostText: 'text',
//    },

//    messagesPage: {
//      dialogs: [
//        { id: 1, name: 'Dasha' },
//        { id: 2, name: 'Makar' },
//        { id: 3, name: 'Sonya' },
//        { id: 4, name: 'Denis' },
//        { id: 5, name: 'Kostya' },
//      ],

//      messages: [
//        { message: 'Hi' },
//        { message: 'How are you?' },
//        { message: 'Good' },
//      ],
//      newMessageText: 'message',
//    },

//    friendsNames: [{ name: 'Dasha' }, { name: 'Denis' }, { name: 'Kostya' }],
//  },

//  _callSubscriber() {
//    console.log('state');
//  },

//  getState() {
//    return this._state;
//  },

//  subscribe(observer) {
//    this._callSubscriber = observer;
//  },

//  dispatch(action) {
//    this._state.profilePage = profileReducer(this._state.profilePage, action);
//    this._state.messagesPage = messagesReducer(
//      this._state.messagesPage,
//      action
//    );
//    this._state.friendsReducer = friendsReducer;
//    this._callSubscriber(this._state);
//  },
//};

//export default store;
//window.store = store;
