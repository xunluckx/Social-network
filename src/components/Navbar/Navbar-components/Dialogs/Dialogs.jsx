import d from './Dialogs.module.css';
import DialogItem from './DialogItems/DialogItems';
import Message from './Messages/Messages';
import React from 'react';

const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.messagesPage.messages.map((message) => (
    <Message message={message.message} />
  ));

  let addMessageElement = React.createRef();

  let addMessage = () => {
    let textMessage = addMessageElement.current.value;
    props.addMessage(textMessage);
  };

  let onMessageChange = () => {
    let text = addMessageElement.current.value;
    props.updateNewMessageText(text);
  };
  return (
    <div className={d.dialogs}>
      <div className={d.dialogs__items}>{dialogsElements}</div>
      <div>
        <div className={d.messages__items}>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={props.newMessageText}
              onChange={onMessageChange}
              ref={addMessageElement}
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
