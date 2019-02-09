import React from 'react';
import PropTypes from 'prop-types';

import jogImage from "../../images/jog@2x.png";

class Jog extends React.PureComponent {

  static propTypes = {
    date: PropTypes.number,
    distance: PropTypes.number,
    time: PropTypes.number,
  };

  // ;;compute -------------------------------------------------------------------------------------

  getSpeed() {
    return this.props.distance / (this.props.time / 60);
  }

  // ;;render --------------------------------------------------------------------------------------

  render() {
    return (
      <div className="jog">
        <img src={jogImage} alt="jog icon" />
        <ul className="jog__info">
          <li className="jog__info-item jog__info-item_date">
            {this.props.date}
          </li>
          <li className="jog__info-item">
            {this.getSpeed()} km/h
          </li>
          <li className="jog__info-item">
            {this.props.distance} km
          </li>
          <li className="jog__info-item">
            {this.props.time} min
          </li>
        </ul>
      </div>
    );
  }
}

export default Jog;