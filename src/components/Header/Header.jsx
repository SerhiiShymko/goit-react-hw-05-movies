import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

// const StyledLink = styled(NavLink)`
//   color: white;

//   &.active {
//     color: orange;
//   }
// `;

const Header = ({ open }) => {
  return (
    <nav className="">
      <div className="container">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
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
