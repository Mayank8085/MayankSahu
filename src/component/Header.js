import React from "react";

const Header = () => {
  return (
    <div className="container-fluid sticky-top bg-dark header ">
      <div className="container ">
        <nav className=" navbar navbar-expand-lg navbar-dark  mx-auto">
          <div className="container-fluid">
            <a className="navbar-brand fs-2 fw-bold me-md-5 text-info" href="/">
              &lt; Mayank Sahu /&gt;
            </a>
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
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav fs-4 mx-auto fw-bold">
                <li className="nav-item ">
                  <a
                    className="nav-link me-5 text-light"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-5 text-light" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-5 text-light" href="#project">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-5 text-light" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;


