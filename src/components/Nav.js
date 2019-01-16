import React from "react";
import Scrollchor from 'react-scrollchor';

export class Nav extends React.Component {
  render() {
    return (
      
      <div className="container" id="top">
        <nav className="navbar navbar-expand-lg navbar-trans">
        {/*
          <a className="navbar-brand">
             Future logo 
          </a>
          */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30"
              height="30"
              focusable="false"
            >
              <title>Menu</title>
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Scrollchor to="#code" className="nav-link">
                  Code Projects
                  </Scrollchor>
              </li>

              <li className="nav-item">
                <Scrollchor to="#design" className="nav-link">
                 Design Samples
                  </Scrollchor>
              </li>


              <li className="nav-item">
              <Scrollchor to="#skills" className="nav-link">
                  My Toolkit
                  </Scrollchor>
              </li>
              <li className="nav-item">
              <Scrollchor to="#me" className="nav-link">
                  About Me
                  </Scrollchor>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
