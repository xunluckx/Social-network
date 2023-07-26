import h from './Header.module.css';

const Header = () => {
  return (
    <header className={h.header}>
      <img
        className={h.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png"
        alt="logo"
      ></img>
    </header>
  );
};

export default Header;
