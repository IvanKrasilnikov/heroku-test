import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Images
import bearFace from "../../images/bearFace@2x.png";

// Components
import Button from "../../components/button/button";
import JogsEmpty from "../../components/jogs-empty/jogs-empty";
import JogCreate from "../../components/jog-create/jog-create";
import JogsList from "../../components/jogs-list/jogs-list";

class JogsPage extends React.Component {
  static propTypes = {};

  state = {
    isNewUser: !this.hasToken(),
    jogs: [],
    showContent: false,
    showCreateJogPopup: false
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
    return this.state.isNewUser || this.state.showCreateJogPopup;
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
      showContent: true,
      showCreateJogPopup: false
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
    this.setState({ showCreateJogPopup: true });
  }

  // ;;render --------------------------------------------------------------------------------------

  renderStartPopup() {
    if (!this.state.isNewUser) return null;

    return (
      <div className="start-page__content start-page__content_popup">
        <img src={bearFace} alt="bear" />
        <Button handleClick={this.handleStartClick}>Let me in</Button>
      </div>
    );
  }

  renderCreateJogPopup() {
    if (!this.state.showCreateJogPopup) return null;

    return (
      <div className="start-page__content">
        <JogCreate handleUpdateJogs={this.handleUpdateJogs} />
      </div>
    );
  }

  renderContent() {
    if (!this.state.showContent) return null;

    return (
      <div className="jogs-page__content">
        {this.renderJogsList()}
        {this.renderJogsEmpty()}
      </div>
    );
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
        {this.renderStartPopup()}
        {this.renderCreateJogPopup()}
        {this.renderContent()}
      </div>
    );
  }
}

export default JogsPage;
