import React from "react";
import axios from "axios";
import { BrowserRouter as Router} from "react-router-dom";

import "./App.css";

import Main from "./components/main/main";

class AppRouter extends React.Component {

  // ;;life ----------------------------------------------------------------------------------------

  componentDidMount() {
    this.setupAxios();
  }

  // ;;inner ---------------------------------------------------------------------------------------

  setupAxios() {
    axios.defaults.baseURL = "https://jogtracker.herokuapp.com/api";
  }

  // ;;render --------------------------------------------------------------------------------------

  render() {
    return (
      <Router>
        <Main />
      </Router>
    );
  }
}

export default AppRouter;
