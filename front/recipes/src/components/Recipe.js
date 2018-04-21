import React, { Component } from 'react';
import Description from './Description.js'
import axios from 'axios'

const URL = 'http://localhost:8000/'
var id;
class Recipe extends Component {

  constructor(props){
    super(props)
    this.state = {
      recipes: []
    }
  }

    componentWillMount(){
      id = JSON.parse(localStorage.getItem("id"))
      axios.get(URL + "recipes/")
      .then(res => {
        var recipes = res.data
        this.setState({recipes})
      })
    }

   render() {
    return(
      <div className="recipe-wrapper">
        {this.state.recipes.map((r, ix) => {
          if(r.id === id){
            return(
              <Description key={ix} recipe = {r}/>
            )
          }
        })}
      </div>  
    );
  }
}


export default Recipe;