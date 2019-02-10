import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link, withRouter } from "react-router-dom";

// Configs
import { routes } from "../../configs";

class Navigation extends React.Component {
  static propTypes = {
    isPopup: PropTypes.bool
  };

  render() {
    return (
      <nav
        className={classNames({
          navigation: true,
          "navigation_is-popup": this.props.isPopup
        })}
      >
        <ul className="navigation__list">
          <li
            className={classNames({
              "navigation__list-item": true,
              "navigation__list-item_active":
                this.props.location.pathname === routes.jogs
            })}
          >
            <Link to={routes.jogs} className="navigation__list-link">
              Jogs
            </Link>
          </li>
          <li
            className={classNames({
              "navigation__list-item": true,
              "navigation__list-item_active":
                this.props.location.pathname === routes.info
            })}
          >
            <Link to={routes.info} className="navigation__list-link">
              Info
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link to="/" className="navigation__list-link">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Navigation);
