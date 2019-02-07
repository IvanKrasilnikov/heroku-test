import React from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Main from "./components/main/main";
import setAuthorization from "./services/set-authorization";

class AppRouter extends React.Component {
  // ;;life ----------------------------------------------------------------------------------------

  componentDidMount() {
    this.setupAxios();
  }

  // ;;compute -------------------------------------------------------------------------------------

  getToken() {
    return localStorage.getItem("token");
  }

  // ;;inner ---------------------------------------------------------------------------------------

  setupAxios() {
    axios.defaults.baseURL = "https://jogtracker.herokuapp.com";

    if (this.getToken()) setAuthorization(this.getToken());
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
