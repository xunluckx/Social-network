import {
  followCreator,
  setUsersCreator,
  unfollowCreator,
} from '../../../../redux/usersReducer';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followCreator(userId));
    },

    unfollow: (userId) => {
      dispatch(unfollowCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
