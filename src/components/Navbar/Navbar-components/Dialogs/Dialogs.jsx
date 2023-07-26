import d from './Dialogs.module.css';
import DialogItem from './DialogItems/DialogItems';
import Message from './Messages/Messages';

let dialogs = [
  { id: 1, name: 'Dasha' },
  { id: 2, name: 'Makar' },
  { id: 3, name: 'Denis' },
  { id: 4, name: 'Kostya' },
  { id: 5, name: 'Sonya' },
  { id: 6, name: 'Gleb' },
];

let messages = [
  { message: 'Hi' },
  { message: 'How are you?' },
  { message: 'Good' },
];

let dialogsElements = dialogs.map((dialog) => (
  <DialogItem name={dialog.name} id={dialog.id} />
));

let messagesElements = messages.map((message) => (
  <Message message={message.message} />
));

const Dialogs = (props) => {
  return (
    <div className={d.dialogs}>
      <div className={d.dialogs__items}>{dialogsElements}</div>
      <div className={d.messages__items}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
