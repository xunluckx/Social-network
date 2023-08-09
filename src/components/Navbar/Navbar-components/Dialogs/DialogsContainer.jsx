import React from 'react';
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from '../../../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

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
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
