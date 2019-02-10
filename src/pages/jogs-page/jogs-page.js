import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Components
import Button from "../../components/button/button";
import JogsEmpty from "../../components/jogs-empty/jogs-empty";
import JogCreate from "../../components/jog-create/jog-create";
import JogsList from "../../components/jogs-list/jogs-list";
import Filter from "../../components/filter/filter";
import { connect } from "react-redux";
import Navigation from "../../components/navigation/navigation";

class JogsPage extends React.Component {
  static propTypes = {
    isDesktop: PropTypes.bool,
    isFilterShow: PropTypes.bool,
    isMenuShow: PropTypes.bool
  };

  state = {
    jogs: [],
    isNewUser: !this.hasToken(),
    isShowContent: false,
    isShowCreateJogPopup: false
  };

  // ;;life ----------------------------------------------------------------------------------------

  componentDidMount() {
    this.getJogs();
  }

  // ;;events --------------------------------------------------------------------------------------

  handleStartClick = () => {
    this.getToken();
  };

  handleJogsEmptyButtonClick = () => {
    this.showCreateJogPopup();
  };

  handleUpdateJogs = () => {
    this.getJogs();
  };

  // ;;compute -------------------------------------------------------------------------------------

  hasToken() {
    return !!localStorage.getItem("token");
  }

  isJogsEmptyShow() {
    return !this.isPopupOpen() && !this.state.jogs.length;
  }

  isJogsListShow() {
    return !this.isPopupOpen() && this.state.jogs.length;
  }

  isPopupOpen() {
    return (
      this.state.isNewUser ||
      this.state.isShowCreateJogPopup ||
      this.props.isMenuShow
    );
  }

  // ;;inner ---------------------------------------------------------------------------------------

  async getJogs() {
    if (this.state.isNewUser) return;

    const response = await axios.get("/api/v1/data/sync", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    });

    this.setState({
      jogs: response.data.response.jogs,
      isShowContent: true,
      isShowCreateJogPopup: false
    });
  }

  async getToken() {
    if (!this.state.isNewUser) return;

    const response = await axios.post("/api/v1/auth/uuidLogin", {
      uuid: "hello"
    });

    localStorage.setItem(
      "token",
      `bearer ${response.data.response.access_token}`
    );

    this.setState({ isNewUser: false }, () => {
      this.getJogs();
    });
  }

  showCreateJogPopup() {
    this.setState({ isShowCreateJogPopup: true });
  }

  // ;;render --------------------------------------------------------------------------------------

  renderMenuPopup() {
    if (!this.props.isMenuShow) return null;

    return (
      <div className="jogs-page__content jogs-page__content_menu-popup">
        <Navigation isPopup />
      </div>
    );
  }

  renderStartPopup() {
    if (!this.state.isNewUser) return null;

    return (
      <div className="jogs-page__content jogs-page__content_start-popup">
        <div className="jogs-page__start-popup">
          <Button handleClick={this.handleStartClick} white={this.props.isDesktop}>Let me in</Button>
        </div>
      </div>
    );
  }

  renderCreateJogPopup() {
    if (!this.state.isShowCreateJogPopup) return null;

    return (
      <div className="jogs-page__content">
        <JogCreate handleUpdateJogs={this.handleUpdateJogs} />
      </div>
    );
  }

  renderContent() {
    if (!this.state.isShowContent) return null;

    return (
      <div className="jogs-page__content">
        {this.renderFilter()}
        {this.renderJogsList()}
        {this.renderJogsEmpty()}
      </div>
    );
  }

  renderFilter() {
    if (!this.props.isFilterShow) return null;

    return <Filter />;
  }

  renderJogsList() {
    if (!this.isJogsListShow()) return null;

    return <JogsList jogs={this.state.jogs} />;
  }

  renderJogsEmpty() {
    if (!this.isJogsEmptyShow()) return null;

    return <JogsEmpty handleButtonClick={this.handleJogsEmptyButtonClick} />;
  }

  render() {
    return (
      <div className="jogs-page">
        {this.renderMenuPopup()}
        {this.renderStartPopup()}
        {this.renderCreateJogPopup()}
        {this.renderContent()}
      </div>
    );
  }
}

const PreparedJogsPage = connect(state => ({
  isFilterShow: state.filter.show,
  isMenuShow: state.menu.show
}))(JogsPage);

export default PreparedJogsPage;
