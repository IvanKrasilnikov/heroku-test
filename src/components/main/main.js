import React from "react";
import { Route } from "react-router-dom";

import JogsPage from "../../pages/jogs-page/jogs-page";
import Header from "../header/header";

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class Main extends React.Component {

  // ;;render --------------------------------------------------------------------------------------

  render() {
    return (
      <div className="main">
        <div className="main__header">
          <Header />
        </div>
        <div className="main__content">
          <Route path="/" exact component={JogsPage} />

          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </div>
    );
  }
}

export default Main;
