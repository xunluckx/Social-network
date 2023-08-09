import d from './Dialogs.module.css';
import DialogItem from './DialogItems/DialogItems';
import Message from './Messages/Messages';
import React from 'react';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageText = state.newMessageText;

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageTextCreator(text);
  };

  return (
    <div className={d.dialogs}>
      <div className={d.dialogs__items}>{dialogsElements}</div>
      <div>
        <div className={d.messages__items}>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageText}
              onChange={onMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={addMessage}>Add post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
