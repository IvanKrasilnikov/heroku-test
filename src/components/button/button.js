import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {

  static propTypes = {
    handleClick: PropTypes.func,
  };

  // ;;events --------------------------------------------------------------------------------------

  handleClick = () => {
    this.props.handleClick();
  };

  // ;;render --------------------------------------------------------------------------------------

  render() {

    return (
      <button onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;