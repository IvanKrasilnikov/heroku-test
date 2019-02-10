import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';

class JogsEmpty extends React.PureComponent {

  static propTypes = {
    handleButtonClick: PropTypes.func,
  };

  // ;;events --------------------------------------------------------------------------------------

  handleButtonClick = () => {
    this.props.handleButtonClick();
  };

  // ;;render --------------------------------------------------------------------------------------

  render() {

    return (
      <div className="jogs-empty">
        <span className="jogs-empty__title">Nothing is there</span>
        <Button handleClick={this.handleButtonClick}>Create your jog first</Button>
      </div>
    );
  }
}

export default JogsEmpty;