import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { hideMenu } from '../../redux/actions';

// Configs
import { routes } from "../../configs";

class Navigation extends React.Component {
  static propTypes = {
    isPopup: PropTypes.bool
  };

  // ;;events --------------------------------------------------------------------------------------

  handleLinkClick = () => {
    this.props.dispatch(hideMenu());
  };

  // ;;render --------------------------------------------------------------------------------------

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
            <Link to={routes.jogs} className="navigation__list-link" onClick={this.handleLinkClick}>
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
            <Link to={routes.info} className="navigation__list-link" onClick={this.handleLinkClick}>
              Info
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link to="/" className="navigation__list-link" onClick={this.handleLinkClick}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect()(withRouter(Navigation));
