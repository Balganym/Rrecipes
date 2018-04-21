import React, { Component } from 'react';
import Ingredients from './Ingredients.js'
import Steps from './Steps.js'
class Description extends Component {
   render() {
    return(
      <div>
        <div className="recipe-box">
          <div className="card">
            <div className="rec-img"><img src={this.props.recipe.image} alt="img"/></div>
            <div className="box-info">
              <h4>{this.props.recipe.title}</h4>
              <div className="info">
                <h5>Portions: {this.props.recipe.portions}</h5>
                {/*<h5>Ready in: {this.props.recipe.readyIn}</h5>*/}
              </div>
            </div>
          </div>
          <div className="description">
            <Ingredients ingr={this.props.recipe.ingredients}/>
            <Steps 
              steps={this.props.recipe.instructions}
             />
          </div>
        </div>
      </div>
    );
  }
}


export default Description;

