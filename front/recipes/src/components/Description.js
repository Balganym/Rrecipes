import React, { Component } from 'react';
import Ingredients from './Ingredients.js'

class Description extends Component {
   render() {
    return(
      <div className="recipe-box">
        <div className="card">
          <div className="rec-img"><img src={this.props.recipe.mainImg} alt="img"/></div>
          <div className="box-info">
            <h4>{this.props.recipe.name}</h4>
            <div className="info">
              <h5>Preparation time: {this.props.recipe.prepTime}</h5>
              <h5>Ready in: {this.props.recipe.readyIn}</h5>
            </div>
          </div>
        </div>
        <div className="ingredients">
          <Ingredients ingr={this.props.recipe.ingredients}/>
        </div>
      </div>
    );
  }
}


export default Description;

