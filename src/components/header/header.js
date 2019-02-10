import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { hideMenu, showMenu, toggleFilter } from "../../redux/actions";

// Configs
import { routes } from "../../configs";

// Images
import logo from "../../images/logo@2x.png";
import logoInvert from "../../images/logoInvert@2x.png";

// Components
import Navigation from "../navigation/navigation";

class Header extends React.Component {
  static propTypes = {
    isFilterShow: PropTypes.bool,
    isMenuShow: PropTypes.bool
  };

  // ;;events --------------------------------------------------------------------------------------

  handleFilterButtonClick = () => {
    this.props.dispatch(toggleFilter());
  };

  handleMenuButtonClick = () => {
    this.props.dispatch(this.props.isMenuShow ? hideMenu() : showMenu());
  };

  // ;;compute -------------------------------------------------------------------------------------

  getLogoSrc() {
    return this.props.isMenuShow ? logoInvert : logo;
  }

  // ;;render --------------------------------------------------------------------------------------

  renderFilterButton() {
    if (this.props.location.pathname !== routes.jogs) return null;

    return (
      <button
        className={classNames({
          "header__filter-button": true,
          "header__filter-button_active": this.props.isFilterShow
        })}
        onClick={this.handleFilterButtonClick}
        type="button"
      />
    );
  }

  renderMenuButton() {
    return (
      <button
        className={classNames({
          "header__menu-button": true,
          "header__menu-button_active": this.props.isMenuShow
        })}
        onClick={this.handleMenuButtonClick}
        type="button"
      />
    );
  }

  render() {
    return (
      <header
        className={classNames({
          header: true,
          "header_menu-popup-show": this.props.isMenuShow
        })}
      >
        <Link to={routes.jogs} className="header__logo">
          <img
            className="header__logo-img"
            src={this.getLogoSrc()}
            alt="logo"
          />
        </Link>
        <div className="header__controls">
          {this.renderFilterButton()}
          {this.renderMenuButton()}
          <Navigation />
        </div>
      </header>
    );
  }
}

const PreparedHeader = connect(state => ({
  isFilterShow: state.filter.show,
  isMenuShow: state.menu.show
}))(Header);

export default withRouter(PreparedHeader);
