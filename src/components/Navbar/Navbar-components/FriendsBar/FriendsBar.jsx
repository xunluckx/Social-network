import f from './FriendsBar.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const FriendsBar = (props) => {
  let friendsElements = props.friendsNames.map((f) => (
    <FriendsItem name={f.name} />
  ));

  return (
    <div className={f.friends__bar}>
      <div className={f.friends__title}>Friends</div>
      <div className={f.friends__items}>{friendsElements}</div>
    </div>
  );
};

export default FriendsBar;
