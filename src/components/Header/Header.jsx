import { NavLink } from 'react-router-dom';
import css from './Header.module.css';


const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.navbar}>
        <nav className={css.nav}>
          <NavLink className={css.navLink} aria-current="page" to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </div>
    </div >
  );
};

export default Header;
