import p from './Post.module.css';

const Post = (props) => {
  return (
    <div className={p.item}>
      <img
        className={p.profile__avatar}
        src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
        alt="ava"
      />
      {props.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
