export default function Navbar() {
  return (
    <nav className="site-nav navbar navbar-expand-sm navbar-dark">
      <a className="navbar-brand" href="/">
        <strong>Christian Jensen</strong>
        <em>Father. Husband. Brother. Patriot.</em>
      </a>
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
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/memorial">Memorial</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/where">Where is it?</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/photos">Photos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
