import React, { Component } from 'react';
import logo from '../img/logo.png'
import food from '../img/food.mp4'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Recipe from './Recipe.js'

const st = {
  color: "#fff",
  textDecoration: "none",
}

class Group extends Component {
  constructor(){
    super()
    this.state={
      sections: [],
      recipes: [],
    }
  }

  render(){
    return(
      <Router>
        <div className="gallery">
          <div className="section">
              <div className="box box-small" style={{backgroundImg: {logo}}}>
                <Link style={st} to="/drinks/recipe">more...</Link>
              </div>
            <div className="box box-small" style={{backgroundImg: {logo}}}>
            </div>
            <div className="box box-small" style={{backgroundImg: {logo}}}>
            </div>
            <div className="box box-small" style={{backgroundImg: {logo}}}>
            </div>
            <div className="box box-small" style={{backgroundImg: {logo}}}>
            </div>
          </div>
          <div className="section">
            <div className="box box-small" style={{backgroundImg: {logo}}}>
            </div>
            <div className="box box-small" style={{backgroundImg: {logo}}}>
            </div>
            <div className="box box-small" style={{backgroundImg: {logo}}}>
            </div>
            <div className="box box-small" style={{backgroundImg: {logo}}}>
            </div>
            <div className="box box-small" style={{backgroundImg: {logo}}}>
            </div>
          </div>
          <Route exact path="/drinks/recipe" component={Recipe} />
        </div>
      </Router>
    )
  }
}

export default Group;