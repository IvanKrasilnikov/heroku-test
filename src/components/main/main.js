import React from "react";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { hideMenu } from '../../redux/actions';

// Configs
import { routes, sizes } from '../../configs';

// Pages
import JogsPage from "../../pages/jogs-page/jogs-page";
import InfoPage from '../../pages/info-page/info-page';

// Components
import Header from "../header/header";

class Main extends React.Component {
  static propTypes = {
    isMenuShow: PropTypes.bool,
  };

  state = {
    isDesktop: this.isDesktop()
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
    this.setState({
      isDesktop: this.isDesktop()
    }, () => {
      if (!(this.isDesktop() && this.props.isMenuShow)) return;

      this.props.dispatch(hideMenu());
    });
  };

  // ;;render --------------------------------------------------------------------------------------

  render() {
    return (
      <div className="main">
        <div className="main__header">
          <Header />
        </div>
        <div className="main__content">
          <Route path={routes.jogs} exact render={() => <JogsPage isDesktop={this.state.isDesktop} />} />
          <Route path={routes.info} render={() => <InfoPage />} />
        </div>
      </div>
    );
  }
}

const PreparedMain = connect(state => ({
  isMenuShow: state.menu.show
}))(Main);

export default withRouter(PreparedMain);
