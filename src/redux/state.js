const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It`s my first post', likesCount: 11 },
        { id: 3, message: '121121121', likesCount: 11 },
        { id: 4, message: '1412414124', likesCount: 11 },
        { id: 4, message: '1412414124', likesCount: 11 },
      ],
      newPostText: 'text',
    },

    messagesPage: {
      dialogs: [
        { id: 1, name: 'Dasha' },
        { id: 2, name: 'Makar' },
        { id: 3, name: 'Sonya' },
        { id: 4, name: 'Denis' },
        { id: 5, name: 'Kostya' },
      ],

      messages: [
        { message: 'Hi' },
        { message: 'How are you?' },
        { message: 'Good' },
      ],
      newMessageText: 'message',
    },

    friendsNames: [{ name: 'Dasha' }, { name: 'Denis' }, { name: 'Kostya' }],
  },

  _callSubscriber: () => {
    console.log('state');
  },

  getState() {
    return this._state;
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  addMessage() {
    let newMessage = {
      message: this._state.messagesPage.newMessageText,
    };

    this._state.messagesPage.messages.push(newMessage);
    this._state.messagesPage.newMessageText = '';
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newMessage) {
    this._state.messagesPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
