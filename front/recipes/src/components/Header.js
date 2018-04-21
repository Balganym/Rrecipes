import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import logo from "../img/logo.png"

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
          <Link style={st} to="/">
            <img src={logo} className="logo" alt="logo"/>
          </Link>
        </div>
        {/*<div className="Header-bottom">
          <div className="page">
              <div className="Menu">
                <Link style={st} to="/desserts">Desserts</Link>
                <Link style={st} to="/salads">Salads</Link>
                <Link style={st} to="/pasta">Pasta</Link>
                <Link style={st} to="/drinks">Drinks</Link>
              </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default Header;











