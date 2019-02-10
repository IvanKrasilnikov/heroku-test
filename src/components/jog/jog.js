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

  getDate() {
    const date = new Date(this.props.date * 1000);

    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }

  getSpeed() {
    return Math.round((this.props.distance * 1000) / (this.props.time * 60));
  }

  // ;;render --------------------------------------------------------------------------------------

  render() {
    return (
      <div className="jog">
        <div className="jog__column">
          <img className="jog__icon" src={jogImage} alt="jog icon" />
        </div>
        <div className="jog__column">
          <ul className="jog__info">
            <li className="jog__info-item jog__info-item_date">
              {this.getDate()}
            </li>
            <li className="jog__info-item">
              <span className="jog__info-item-title">Speed: </span>
              {this.getSpeed()} m/sec
            </li>
            <li className="jog__info-item">
              <span className="jog__info-item-title">Distance: </span>
              {this.props.distance} km
            </li>
            <li className="jog__info-item">
              <span className="jog__info-item-title">Time: </span>
              {this.props.time} min
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Jog;