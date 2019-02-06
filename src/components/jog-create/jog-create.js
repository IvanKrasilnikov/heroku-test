import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Button from "../button/button";

class JogCreate extends React.Component {
  static propTypes = {
    handleButtonClick: PropTypes.func
  };

  state = {
    distance: "",
    time: "",
    date: ""
  };

  // ;;events --------------------------------------------------------------------------------------

  handleDistanceChange = e => {
    this.changeInputValue("distance", e.target.value);
  };

  handleTimeChange = e => {
    this.changeInputValue("time", e.target.value);
  };

  handleDateChange = e => {
    this.changeInputValue("date", e.target.value);
  };

  handleSaveButtonClick = () => {
    this.createJog();
  };

  // ;;inner ---------------------------------------------------------------------------------------

  createJog() {
    axios
      .post("/v1/data/jog", {
        date: this.state.distance,
        time: this.state.time,
        distance: this.state.date
      })
      .then(() => {
        this.props.handleButtonClick();
      });
  }

  changeInputValue(name, value) {
    this.setState({
      [name]: value
    });
  }

  // ;;render --------------------------------------------------------------------------------------

  render() {
    return (
      <div className="jog-create">
        <label>
          <span className="jog-create__label-title">Distance</span>
          <input
            type="text"
            value={this.state.distance}
            onChange={this.handleDistanceChange}
          />
        </label>
        <label>
          <span className="jog-create__label-title">Time</span>
          <input
            type="text"
            value={this.state.time}
            onChange={this.handleTimeChange}
          />
        </label>
        <label>
          <span className="jog-create__label-title">Date</span>
          <input
            type="text"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
        </label>
        <Button handleClick={this.handleSaveButtonClick}>Save</Button>
      </div>
    );
  }
}

export default JogCreate;
