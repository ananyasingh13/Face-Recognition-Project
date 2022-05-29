import React, { Component } from "react";
import "./bootstrap.min.css";
import Home from "./Home.js";
import Register from "./Register.js";
import Login from "./Login.js";
import SignUp from "./signup";
import Attendance from "./Attendance";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainSection from "./MainSection";


export default class App extends Component {
  render() {
    return (
      <Router>

        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <b>Home</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/readme" className="nav-link">
                    <b>Procedure</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    <b>Register</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <b>Login</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    <b>SignUp</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/attendance" className="nav-link">
                    <b>Attendance</b>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
        
          
          <Route path="/register" component={Register} />
          <Route path="/readMe" component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={MainSection} />
          <Route path="/signup" component={SignUp} />
          <Route path="/attendance" component={Attendance} />
          
        </div>
      </Router>
    );
  }
}
