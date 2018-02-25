import React, { Component } from 'react';
import logo from '../img/logo.png'
import food from '../img/food.mp4'

const images = [
  logo, 
]

class Home extends Component {
  constructor(){
    super()
    this.state={
      recipes: [],
    }
  }
  render(){
    return(
      <div className="Home">
        <div className="Home-top">
          <video autoPlay muted loop id="myVideo" className="video">
            <source src={food} type="video/mp4" />
          </video>
          <div className="content"></div>
        </div>
        <div className="Home-body">
          <div className="section">
            <div className="box box-small" style={{backgroundImg: {logo}}}>
            </div>
            <div className="box box-small" style={{backgroundImg: {logo}}}>
            </div>
            <div className="box box-large" style={{backgroundImg: {logo}}}>
            </div>
          </div>
          <div className="section">
            <div className="box box-large" style={{backgroundImg: {logo}}}>
            </div>
            <div className="box box-small" style={{backgroundImg: {logo}}}>
            </div>
            <div className="box box-small" style={{backgroundImg: {logo}}}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;