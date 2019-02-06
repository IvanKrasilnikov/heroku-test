import React from 'react';
import PropTypes from 'prop-types';

class Jog extends React.PureComponent {

  static propTypes = {};

  render() {

    return (
      <div className="jog">
        <img src="" alt="" />
        <ul className="jog__info">
          <li className="jog__info-item jog__info-item_date">
            date
          </li>
          <li className="jog__info-item">
            speed
          </li>
          <li className="jog__info-item">
            distance
          </li>
          <li className="jog__info-item">
            time
          </li>
        </ul>
      </div>
    );
  }
}

export default Jog;