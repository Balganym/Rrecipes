import React, { Component } from 'react';
import Recipe from './Recipe.js'

class Group extends Component {
  
  handleRecipeClick = (id) => {
    this.props.onRecipeClick(id)
  }
  render(){
    return(
    <div className="page">
      <div className="headerImg">
        <img src={this.props.img} alt="img"/>
      </div>
      <div className="section">
        {this.props.desserts.map((des, ix) => {
          return (
            <Recipe
              key = {ix}
              recipe = {des}
              curRecipe={this.props.curRecipe}
              onRecipeClick = {this.handleRecipeClick}
            />
          )
        })}
      </div>
    </div>
    )
  }
}

export default Group;