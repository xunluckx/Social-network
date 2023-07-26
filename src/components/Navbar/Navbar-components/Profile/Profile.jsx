import MyPosts from './MyPosts/MyPosts';
import p from '../Profile/ProfileInfo/ProfileInfo';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileBackground from './ProfileInfo/Background/ProfileBackground';

const Profile = () => {
  return (
    <div>
      <ProfileBackground />
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
