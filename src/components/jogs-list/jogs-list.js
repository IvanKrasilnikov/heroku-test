import React from "react";
import PropTypes from "prop-types";

// Components
import Jog from "../jog/jog";

class JogsList extends React.Component {
  static propTypes = {
    jogs: PropTypes.array
  };

  // ;;render --------------------------------------------------------------------------------------

  renderItems() {
    return this.props.jogs.map(jog => (
      <li className="jogs-list__item" key={jog.id}>
        <Jog {...jog} />
      </li>
    ));
  }

  render() {
    return <ul className="jogs-list">{this.renderItems()}</ul>;
  }
}

export default JogsList;
