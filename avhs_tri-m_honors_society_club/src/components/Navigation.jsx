import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            AVHS Tri-M Honors Society Club
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/team">
                  Our Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/calendar">
                  Calendar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/join">
                  Join Us!
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;