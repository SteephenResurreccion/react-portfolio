import { NavLink, Link } from 'react-router-dom';

export default function NavbarAutumn() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-autumn sticky-top shadow">
      <div className="container-fluid justify-content-between">

        {/* Left: Logo */}
        <div className="nav-pills-container">
          <Link className="nav-link" to="/">
            <i className="bi bi-suit-heart-fill leaf-icon"></i> Steephen
          </Link>
        </div>

        {/* Middle: Main nav */}
        <div className="nav-pills-container">
          <NavLink to="/" end className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')}>
            <i className="bi bi-house"></i> Home
          </NavLink>
          <NavLink to="/about" className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')}>
            <i className="bi bi-person"></i> About
          </NavLink>
          <NavLink to="/portfolio" className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')}>
            <i className="bi bi-briefcase"></i> Portfolio
          </NavLink>
        </div>

        {/* Right: Contact */}
        <div className="nav-pills-container">
          <NavLink to="/contact" className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')}>
            <i className="bi bi-envelope"></i> Contact Me
          </NavLink>
        </div>

      </div>
    </nav>
  );
}
