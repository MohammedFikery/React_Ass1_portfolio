import React from "react";
import { Link, NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container my-3 h4 ">
          <Link className="navbar-brand text-light" to="/Home">
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item mx-2">
                <NavLink to="/About" className="nav-link text-light">
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/Portfolio" className="nav-link text-light">
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/Contact" className="nav-link text-light">
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
