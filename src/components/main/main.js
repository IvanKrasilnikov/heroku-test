import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

// Pages
import JogsPage from "../../pages/jogs-page/jogs-page";

// Components
import Header from "../header/header";

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class Main extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className="main">
        <div className="main__header">
          <Header />
        </div>
        <div className="main__content">
          <Route path="/" exact>
            <JogsPage />
          </Route>

          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </div>
    );
  }
}

export default Main;
