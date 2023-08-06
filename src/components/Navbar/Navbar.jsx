import { NavLink } from 'react-router-dom';
import n from './Navbar.module.css';
import FriendsBar from './Navbar-components/FriendsBar/FriendsBar';

const Navbar = (props) => {
  return (
    <nav className={n.nav}>
      <div>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? n.active : n.item)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? n.active : n.item)}
        >
          Dialogs
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? n.active : n.item)}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? n.active : n.item)}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? n.active : n.item)}
        >
          Settings
        </NavLink>
      </div>
      <FriendsBar friendsNames={props.state} />
    </nav>
  );
};

export default Navbar;
