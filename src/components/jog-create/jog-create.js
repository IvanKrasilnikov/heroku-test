import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Components
import Button from "../button/button";

class JogCreate extends React.Component {
  static propTypes = {
    handleClose: PropTypes.func,
    handleUpdateJogs: PropTypes.func,
  };

  state = {
    distance: "",
    time: "",
    date: ""
  };

  // ;;events --------------------------------------------------------------------------------------

  handleCloseButtonClick = () => {
    this.props.handleClose();
  };

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

  async createJog() {
    await axios.post("/api/v1/data/jog", {
      date: this.state.date,
      time: this.state.time,
      distance: this.state.distance
    }, {
      headers: {
        Authorization: localStorage.getItem("token"),
      }
    });

    this.props.handleUpdateJogs();
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
        <button
          className="jog-create__close-button"
          onClick={this.handleCloseButtonClick}
          type="button"
        />
        <label className="jog-create__field">
          <span className="jog-create__label-title">Distance</span>
          <input
            className="jog-create__input"
            type="number"
            value={this.state.distance}
            onChange={this.handleDistanceChange}
            min={0.1}
            step={0.1}
          />
        </label>
        <label className="jog-create__field">
          <span className="jog-create__label-title">Time</span>
          <input
            className="jog-create__input"
            type="number"
            value={this.state.time}
            onChange={this.handleTimeChange}
            min={1}
          />
        </label>
        <label className="jog-create__field">
          <span className="jog-create__label-title">Date</span>
          <input
            className="jog-create__input"
            type="date"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
        </label>
        <Button fullWidth handleClick={this.handleSaveButtonClick} white>Save</Button>
      </div>
    );
  }
}

export default JogCreate;
