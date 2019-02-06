import React from "react";
import PropTypes from "prop-types";

import logo from "../../images/logo@2x.png";

import { Link } from "react-router-dom";

class Header extends React.Component {
  static propTypes = {};

  render() {
    return (
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-list-item">
              <Link to="/" className="header__nav-list-link">
                Jogs
              </Link>
            </li>
            <li className="header__nav-list-item">
              <Link to="/" className="header__nav-list-link">
                Info
              </Link>
            </li>
            <li className="header__nav-list-item">
              <Link to="/" className="header__nav-list-link">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
