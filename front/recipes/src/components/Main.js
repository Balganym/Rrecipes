import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Header from './Header.js'
import Home from "./Home.js"
import Group from "./Group.js"
import {recipes} from '../constants/recipes.js'

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentRecipe: null,
    }
  }

  render() {
    return (
      <Router>
        <div className="Main">
          <Header/>
          <Route exact path="/" render={()=>(<Home recipes={recipes} />)} />
          <Route path="/desserts" render={() => (
            <Group
              img='https://images.media-allrecipes.com/images/75028.jpg'
              desserts = {recipes.filter(rec => rec.category === 'dessert')}
            />)} 
          />
        </div>
      </Router>
    );
  }
}

export default Main;











