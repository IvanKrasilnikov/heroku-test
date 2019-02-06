import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/button/button";
import axios from "axios";

import bearFace from "../../images/bearFace@2x.png";
import JogsEmpty from '../../components/jogs-empty/jogs-empty';
import JogCreate from '../../components/jog-create/jog-create';

class JogsPage extends React.Component {
  static propTypes = {};

  state = {
    hasToken: this.wasWithToken(),
    showCreateJogPopup: false,
  };

  // ;;events --------------------------------------------------------------------------------------

  handleStartClick = () => {
    this.getToken();
  };

  handleJogsEmptyButtonClick = () => {
    this.showCreateJogPopup();
  };

  handleCreateButtonClick = () => {
    // REQUEST TO JOGS LIST
    this.hideCreateJogPopup();
  };

  // ;;compute -------------------------------------------------------------------------------------

  getToken() {
    if (this.state.hasToken) return;

    axios
      .post("/v1/auth/uuidLogin", {
        uuid: "hello"
      })
      .then(response => {
        const token = response.data.response.access_token;

        localStorage.setItem("token", token);
        this.setState({ hasToken: true });

        axios.defaults.headers.common["Authorization"] = token;
      });
  }

  wasWithToken() {
    return !!localStorage.getItem("token");
  }

  // ;;inner ---------------------------------------------------------------------------------------

  showCreateJogPopup() {
    this.setState({ showCreateJogPopup: true });
  }

  hideCreateJogPopup() {
    this.setState({ showCreateJogPopup: false });
  }

  // ;;render --------------------------------------------------------------------------------------

  renderStartPopup() {
    if (this.state.hasToken) return null;

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
        <JogCreate handleButtonClick={this.handleCreateButtonClick} />
      </div>
    );
  }

  renderJogsContent() {
    if (!this.state.hasToken || this.state.showCreateJogPopup) return null;

    return (
      <div className="start-page__content">
        <JogsEmpty handleButtonClick={this.handleJogsEmptyButtonClick} />
      </div>
    );
  }

  render() {
    return (
      <div className="start-page">
        {this.renderStartPopup()}
        {this.renderCreateJogPopup()}
        {this.renderJogsContent()}
      </div>
    );
  }
}

export default JogsPage;
