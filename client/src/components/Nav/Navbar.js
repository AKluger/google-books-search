import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <Link className="navbar-brand" to="/">
        Google Book Search
      </Link>
      <div>
        <div className="navbar-nav">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/search"
                  ? "nav-link nav-item active"
                  : "nav-link nav-item"
              }
            >
              Search
            </Link>
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link nav-item active" : "nav-link nav-item "}
            >
              Saved
            </Link>
        </div>
      </div>

    </nav>
  );
}

export default Nav;
