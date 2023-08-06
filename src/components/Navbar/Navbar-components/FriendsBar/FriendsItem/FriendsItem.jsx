import f from '../FriendsBar.module.css';

const FriendsItem = (props) => {
  return (
    <div>
      <div className={f.friends__item}>
        <img
          className={f.friends__avatar}
          src="https://shapka-youtube.ru/wp-content/uploads/2020/04/leon.jpg"
          alt=""
        />
        <div className={f.friends__names}>{props.name}</div>
      </div>
    </div>
  );
};

export default FriendsItem;
