import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/button/button";
import axios from "axios";

import bearFace from "../../images/bearFace@2x.png";

class JogsPage extends React.Component {
  static propTypes = {};

  state = {
    hasToken: this.wasWithToken()
  };

  // ;;events --------------------------------------------------------------------------------------

  handleStartClick = () => {
    this.getToken();
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

  renderJogsContent() {
    if (!this.state.hasToken) return null;

    return (
      <div className="start-page__content">

      </div>
    );
  }

  render() {
    return (
      <div className="start-page">
        {this.renderStartPopup()}
        {this.renderJogsContent()}
      </div>
    );
  }
}

export default JogsPage;
