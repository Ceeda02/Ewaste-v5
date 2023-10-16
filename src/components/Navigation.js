import React from "react";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand ex" to="/">
            <b>EcoCycle</b>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {/* <a
                  className="nav-link"
                  // aria-current="page"
                  // activeClassName="active"
                  href="#home"
                >
                  <b>Home</b>
                </a> */}
                <NavLink className="nav-link" to="/Home" exact>
                  <b>Home</b>
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <NavLink
                  className="nav-link"
                  aria-current="page"
                  activeClassName="active"
                  href="#track"
                >
                  <b>Donate</b>
                </NavLink> */}
                <NavLink className="nav-link" to="/Donate">
                  <b>Donate</b>
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/Track">
                  <b>Track</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  <b>Contact</b>
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <b>Account</b>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
