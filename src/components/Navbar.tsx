import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="site-nav navbar navbar-expand-sm navbar-dark">
      <Link className="navbar-brand" to="/">
        <strong>Christian Jensen</strong>
        <em>Father. Husband. Brother. Patriot.</em>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/memorial">Memorial</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/where">Where is it?</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/photos">Photos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
