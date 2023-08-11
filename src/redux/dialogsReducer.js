const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        message: state.newMessageText,
      };

      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];

      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = '';
      return stateCopy;
    }

    case UPDATE_NEW_MESSAGE_TEXT:
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.newMessage;
      return stateCopy;
    default:
      return state;
  }
};

export const addMessageCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

export default dialogsReducer;
