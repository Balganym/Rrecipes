import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Redirect, Switch
} from 'react-router-dom'
import Header from './Header.js'
import Home from "./Home.js"
import Group from "./Group.js"
import Recipe from "./Recipe.js"
import {recipes} from '../constants/recipes.js'
import axios from 'axios'

const URL = 'http://localhost:8000/'

class Main extends Component {

  constructor(props){
    super(props);
    this.state = { 
      rec: null, 
      curRecipeId: null,
      categories: []
    }
  }

  componentWillMount(){
    axios.get(URL + "categories/")
      .then(res => {
        var categories = res.data
        this.setState({categories})
      })
  }

  handleRecipeClick = (id) => {
    var curId = JSON.stringify(id)
    localStorage.setItem('id', curId);
  }

  render() {
    return (
      <Router>
          <div className="Main">
            <Header/>
            <Route exact path="/" render={()=>(
              <Home 
                onRecipeClick = {this.handleRecipeClick}
              />
            )} />

            {this.state.categories.map((c, ix) => (
              <Route key={ix} path={"/"+c.link} render={() => (
                <Group
                  img={c.image}
                  link = {URL + "recipes/" + c.link + "/"}
                  onRecipeClick = {this.handleRecipeClick}
                  curRecipe = {this.state.currentRecipe}
                />)} 
              />
            ))}

            {/*<Route path="/desserts" render={() => (
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
            />*/}
            <Route exact path="/recipe" render={() => (
              <Recipe
                id = {this.state.rec}
              />)} 
            />
          </div>
      </Router>
    );
  }
}

export default Main;











