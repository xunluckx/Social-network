import React from 'react';
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from '../../../../redux/messagesReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let addMessage = () => {
    props.store.dispatch(addMessageCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text));
  };

  return (
    <Dialogs
      updateNewMessageTextCreator={onMessageChange}
      addMessage={addMessage}
      messagesPage={state}
    />
  );
};

export default DialogsContainer;
