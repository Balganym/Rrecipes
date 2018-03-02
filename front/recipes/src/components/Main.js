import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './Header.js'
import Home from "./Home.js"
import Group from "./Group.js"
import Step from "./Step.js"
import {recipes} from '../constants/recipes.js'

class Main extends Component {

  constructor(props){
    super(props);
    this.state = { 
      rec: null, 
      curRecipeId: null
    }
  }

  handleRecipeClick = (id) => {
    var curId = JSON.stringify(id)
    localStorage.setItem('id', curId)
    this.setState({
      rec: id,
    })
  }

  render() {
    return (
      <Router>
        <div className="Main">
          <Header/>
          <Route exact path="/" render={()=>(
            <Home 
              recipes={recipes} 
              onRecipeClick = {this.handleRecipeClick}
            />
          )} />
          <Route path="/desserts" render={() => (
            <Group
              img='https://images.media-allrecipes.com/images/75028.jpg'
              desserts = {recipes.filter(rec => rec.category === 'desserts')}
              onRecipeClick = {this.handleRecipeClick}
              curRecipe = {this.state.currentRecipe}
            />)} 
          />
          <Route path="/drinks" render={() => (
            <Group
              img='https://images.media-allrecipes.com/images/75045.jpg'
              desserts = {recipes.filter(rec => rec.category === 'drinks')}
              onRecipeClick = {this.handleRecipeClick}
            />)} 
          />
          <Route path="/salads" render={() => (
            <Group
              img='https://images.media-allrecipes.com/images/75077.jpg'
              desserts = {recipes.filter(rec => rec.category === 'salads')}
              onRecipeClick = {this.handleRecipeClick}
            />)} 
          />
          <Route path="/pasta" render={() => (
            <Group
              img='https://images.media-allrecipes.com/images/75073.jpg'
              desserts = {recipes.filter(rec => rec.category === 'pasta')}
              onRecipeClick = {this.handleRecipeClick}
            />)} 
          />
          <Route path="/recipe" render={() => (
            <Step
              recipes = {recipes}
              id = {this.state.rec}
            />)} 
          />
        </div>
      </Router>
    );
  }
}

export default Main;











