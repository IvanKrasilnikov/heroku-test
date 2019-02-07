import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Images
import bearFace from "../../images/bearFace@2x.png";

// Services
import setAuthorization from "../../services/set-authorization";

// Components
import Button from "../../components/button/button";
import JogsEmpty from "../../components/jogs-empty/jogs-empty";
import JogCreate from "../../components/jog-create/jog-create";

class JogsPage extends React.Component {
  static propTypes = {};

  state = {
    isNewUser: !this.hasToken(),
    showCreateJogPopup: false
  };

  // ;;events --------------------------------------------------------------------------------------

  handleStartClick = () => {
    this.getToken();
  };

  handleJogsEmptyButtonClick = () => {
    this.showCreateJogPopup();
  };

  handleCreateButtonClick = () => {
    // UPDATE JOGS LIST
    this.hideCreateJogPopup();
  };

  // ;;compute -------------------------------------------------------------------------------------

  hasToken() {
    return !!localStorage.getItem("token");
  }

  // ;;inner ---------------------------------------------------------------------------------------

  getJogs() {
    axios.get("/api/v1/data/sync").then(response => {
      console.log(response.data.response);
    });
  }

  getToken() {
    if (!this.state.isNewUser) return;

    axios
      .post("/api/v1/auth/uuidLogin", {
        uuid: "hello"
      })
      .then(response => {
        setAuthorization(response.data.response.access_token);

        this.setState({ isNewUser: false });
      });
  }

  showCreateJogPopup() {
    this.setState({ showCreateJogPopup: true });
  }

  hideCreateJogPopup() {
    this.setState({ showCreateJogPopup: false });
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
        <JogCreate handleButtonClick={this.handleCreateButtonClick} />
      </div>
    );
  }

  renderJogsEmpty() {
    if (this.state.isNewUser || this.state.showCreateJogPopup) return null;

    return <JogsEmpty handleButtonClick={this.handleJogsEmptyButtonClick} />;
  }

  renderJogsList() {
    if (this.state.isNewUser || this.state.showCreateJogPopup) return null;

    return <JogsEmpty handleButtonClick={this.handleJogsEmptyButtonClick} />;
  }

  render() {
    return (
      <div className="jogs-page">
        {this.renderStartPopup()}
        {this.renderCreateJogPopup()}
        <div className="jogs-page__content">
          {this.renderJogsEmpty()}
          {/*{this.renderJogsList()}*/}
        </div>
      </div>
    );
  }
}

export default JogsPage;
