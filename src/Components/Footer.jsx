import React from "react";
import Logo from "../Components/Assets/Logo.png";

const Footer = () => {
  return (
    <div className="container-fluid px-5 footer-container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mt-4 link-body-emphasis text-decoration-none"
          >
            <img src={Logo} alt="" />
          </a>
          <p className="text-white logo-text">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5 className="text-white mb-3 mt-4">Our Technologies</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#1" className="nav-link p-0 text-white">
                ReactJS
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#2" className="nav-link p-0 text-white">
                Gatsby
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#3" className="nav-link p-0 text-white">
                NextJS
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#4" className="nav-link p-0 text-white">
                NodeJS
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#5" className="nav-link p-0 text-white">
                GraphQL
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#6" className="nav-link p-0 text-white">
                Laravel
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="text-white mb-3 mt-4">Our Services</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#1" className="nav-link p-0 text-white">
                Social media Marketing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#2" className="nav-link p-0 text-white">
                Web & Mobile App Development
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#3" className="nav-link p-0 text-white">
                Data & Analytics
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#4" className="nav-link p-0 text-white">
                Google Marketing solutions
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#5" className="nav-link p-0 text-white">
                Search Engine Optimization
              </a>
            </li>
          </ul>
        </div>

        <div className="container-fluid terms">
          <ul className="nav  border-bottom pb-5 mb-2"></ul>
          <p className="text-center  text-white">
            Privacy Policy | Terms & Conditions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
