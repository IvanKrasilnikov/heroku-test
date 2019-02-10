import React from "react";
import PropTypes from "prop-types";

class Filter extends React.Component {
  static propTypes = {};

  state = {
    dateFrom: "",
    dateTo: ""
  };

  // ;;events --------------------------------------------------------------------------------------

  handleDateFromChange = e => {
    this.changeInputValue("dateFrom", e.target.value);
  };

  handleDateToChange = e => {
    this.changeInputValue("dateTo", e.target.value);
  };

  // ;;inner ---------------------------------------------------------------------------------------

  changeInputValue(name, value) {
    this.setState({
      [name]: value
    });
  }

  // ;;render --------------------------------------------------------------------------------------

  render() {
    return (
      <div className="filter">
        <div className="filter__content">
          <label className="filter__field">
            <span className="filter__label">Date from</span>
            <input
              className="filter__input"
              type="date"
              value={this.state.dateFrom}
              onChange={this.handleDateFromChange}
            />
          </label>
          <label className="filter__field">
            <span className="filter__label">Date to</span>
            <input
              className="filter__input"
              type="date"
              value={this.state.dateTo}
              onChange={this.handleDateToChange}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Filter;
