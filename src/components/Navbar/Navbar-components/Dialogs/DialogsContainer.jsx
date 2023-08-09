import React from 'react';
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from '../../../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import storeContext from '../../../../storeContext';

const DialogsContainer = () => {
  return (
    <storeContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let addMessage = () => {
          store.dispatch(addMessageCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextCreator(text));
        };
        return (
          <Dialogs
            updateNewMessageTextCreator={onMessageChange}
            addMessage={addMessage}
            dialogsPage={state}
          />
        );
      }}
    </storeContext.Consumer>
  );
};

export default DialogsContainer;
