import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileBackground from './ProfileInfo/Background/ProfileBackground';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div>
      <ProfileBackground />
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
