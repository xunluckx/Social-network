import d from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div>
      <div className={d.dialog}>
        <img
          className={d.dialogs__avatar}
          src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
          alt="ava"
        />
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
