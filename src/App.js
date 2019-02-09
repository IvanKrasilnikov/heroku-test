import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";

// Components
import Main from "./components/main/main";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Main />
      </Router>
    );
  }
}

export default App;
