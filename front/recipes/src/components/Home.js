import React, { Component } from 'react';
import food from '../img/food.mp4'
import Recipe from './Recipe.js'
import {Route} from 'react-router-dom'
import Step from './Step.js'

class Home extends Component {
  constructor(){
    super()
    this.state={
      redirect: null
    }
  }

  handleRecipeClick = (id) => {
    console.log(123)
    
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
            {this.props.recipes.map((r, ix) => {
              return(
                <Recipe
                  key = {ix}
                  recipe = {r}
                  onRecipeClick = {this.handleRecipeClick}
                />
              )
            })}
            <Route path="/recipe" component={Step} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;







