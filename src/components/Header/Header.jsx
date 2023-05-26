import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <nav className="">
      <div className="container">
        {/* <span className="navbar-brand">Navbar</span> */}
        <div className="navbar-nav">
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
