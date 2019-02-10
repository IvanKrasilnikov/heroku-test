import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {

  static propTypes = {};

  render() {

    return (
      <div className="filter">
        <div className="filter__content">
          <label className="filter__field">
            <span className="filter__label">Date from</span>
            <input className="filter__input" type="date" />
          </label>
          <label className="filter__field">
            <span className="filter__label">Date to</span>
            <input className="filter__input" type="date" />
          </label>
        </div>
      </div>
    );
  }
}

export default Filter;