import React, { Component } from 'react';
import {
  Link, Route
} from 'react-router-dom'
import logo from "../img/logo.png"
import Group from './Group.js'
import Home from './Home.js'
import Step from './Step.js'

const st = {
  color: "#fff",
  textDecoration: "none",
}
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-top">
          <p>Eat Well, Be Happy, Love Food</p>
        </div>
        <div className="Header-body">
          <img src={logo} className="logo" alt="logo"/>
        </div>
        <div className="Header-bottom">
          <div className="page">
              <div className="Menu">
                <Link style={st} to="/">Home</Link>
                <Link style={st} to="/desserts">Desserts</Link>
                <Link style={st} to="/salads">Salads</Link>
                <Link style={st} to="/pasta">Pasta</Link>
                <Link style={st} to="/drinks">Drinks</Link>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;











