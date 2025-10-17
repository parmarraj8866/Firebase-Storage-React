import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-4 py-2" style={{backgroundColor : "#001f3f"}}>
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-light fs-4" to="/">
         🛒 MyShop
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className="nav-link px-3 text-light  fs-5"
              >
                Home
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link px-3 text-light  fs-5"
              >
                About
              </NavLink>
            </li>

             <li className="nav-item">
              <NavLink
                to="/form"
                className="nav-link px-3 text-light  fs-5"
              >
                Add-Product
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
