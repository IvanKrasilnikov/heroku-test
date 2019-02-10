import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Button extends React.PureComponent {
  static propTypes = {
    handleClick: PropTypes.func,
    white: PropTypes.bool
  };

  // ;;events --------------------------------------------------------------------------------------

  handleClick = () => {
    this.props.handleClick();
  };

  // ;;render --------------------------------------------------------------------------------------

  render() {
    return (
      <button
        className={classNames({
          button: true,
          button_white: this.props.white
        })}
        onClick={this.handleClick}
        type="button"
      >
        <span className="button__text">{this.props.children}</span>
      </button>
    );
  }
}

export default Button;
