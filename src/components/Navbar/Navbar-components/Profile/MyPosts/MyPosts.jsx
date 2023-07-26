import Post from './Post/Post';
import p from './MyPosts.module.css';

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It`s my first post', likesCount: 11 },
    { id: 3, message: '121121121', likesCount: 11 },
    { id: 4, message: '1412414124', likesCount: 11 },
    { id: 4, message: '1412414124', likesCount: 11 },
  ];

  let postsElements = posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div className={p.posts}>
      My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button id="postbtn">Add post</button>
        </div>
      </div>
      <div>New post</div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
