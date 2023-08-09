import Post from './Post/Post';
import p from './MyPosts.module.css';
import React from 'react';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post
      key={post.likesCount}
      message={post.message}
      likesCount={post.likesCount}
    />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={p.posts}>
      My posts
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div>New post</div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
