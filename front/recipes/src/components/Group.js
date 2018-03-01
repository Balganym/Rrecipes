import React, { Component } from 'react';
import logo from '../img/logo.png'
import Recipe from './Recipe.js'

class Group extends Component {
  
  handleRecipeClick(id){
    console.log(id + '!!!');
  }
  
  render(){
    return(
    <div className="page">
      {this.props.desserts.map((des, ix) => {
        return (
          <Recipe
            key = {ix}
            recipe = {des}
            onRecipeClick = {this.handleRecipeClick}
          />
        )
      })}
    </div>
    )
  }
}

export default Group;