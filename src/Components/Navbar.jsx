import React from "react";
import Logo from "../Components/Assets/Logo.png";

const Navbar = () => {
  return (
    <div className="container-fluid px-5 header ">
      <nav className="navbar navbar-expand-sm navbar-light py-3">
        <a
          href="/"
          className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img src={Logo} alt="" />
        </a>

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

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#1" className="nav-link menu-color">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a href="#2" className="nav-link menu-color">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a href="#3" className="nav-link menu-color">
                CONTACT US
              </a>
            </li>
            <li className="nav-item">
              <a href="#4" className="nav-link menu-color">
                CAREERS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
