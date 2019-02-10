import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { hideMenu } from '../../redux/actions';

// Configs
import { sizes } from '../../configs';

// Pages
import JogsPage from "../../pages/jogs-page/jogs-page";

// Components
import Header from "../header/header";

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class Main extends React.Component {
  static propTypes = {
    isMenuShow: PropTypes.bool,
  };

  // ;;events --------------------------------------------------------------------------------------

  componentDidMount() {
    window.addEventListener('resize', this.handleCloseMenuPopupWhenResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleCloseMenuPopupWhenResize);
  }

  // ;;compute -------------------------------------------------------------------------------------

  isDesktop() {
    return window.matchMedia(`(min-width: ${sizes.desktop}px)`).matches;
  }

  // ;;events --------------------------------------------------------------------------------------

  handleCloseMenuPopupWhenResize = () => {
    if (!(this.isDesktop() && this.props.isMenuShow)) return;

    this.props.dispatch(hideMenu());
  };

  // ;;render --------------------------------------------------------------------------------------

  render() {
    return (
      <div className="main">
        <div className="main__header">
          <Header />
        </div>
        <div className="main__content">
          <Route path="/" exact>
            <JogsPage />
          </Route>

          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </div>
    );
  }
}

const PreparedMain = connect(state => ({
  isMenuShow: state.menu.show
}))(Main);

export default PreparedMain;
