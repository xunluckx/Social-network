import React from 'react';
import {
  addPostCreator,
  updateNewPostTextCreator,
} from '../../../../../redux/profileReducer';
import MyPosts from './MyPosts';
import storeContext from '../../../../../storeContext';

const MyPostsContainer = () => {
  return (
    <storeContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostCreator());
        };

        let onPostChange = (text) => {
          let action = updateNewPostTextCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </storeContext.Consumer>
  );
};

export default MyPostsContainer;
