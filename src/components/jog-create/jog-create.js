import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Components
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
      .post("/api/v1/data/jog", {
        date: this.state.date,
        time: this.state.time,
        distance: this.state.distance
      })
      .then(() => {
        this.props.handleButtonClick();

        return axios.get("/api/v1/data/sync");
      })
      .then(response => {
        // UPDATE JOGS LIST
        console.log(response);
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
            type="number"
            value={this.state.distance}
            onChange={this.handleDistanceChange}
            min={0.1}
            step={0.1}
          />
        </label>
        <label>
          <span className="jog-create__label-title">Time</span>
          <input
            type="number"
            value={this.state.time}
            onChange={this.handleTimeChange}
            min={1}
          />
        </label>
        <label>
          <span className="jog-create__label-title">Date</span>
          <input
            type="date"
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
