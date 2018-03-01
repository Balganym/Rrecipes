import React, { Component } from 'react';

class Recipe extends Component {

   handleClick = () => {
      this.props.onRecipeClick(this.props.recipe.id);
   }

   render() {
      return(
         <div className="box box-small" style={{backgroundImage: "url(" + this.props.recipe.mainImg + ")"}}>
            <span className="cover">
               <h4 onClick={this.handleClick}>{this.props.recipe.name}</h4>
            </span>
          </div>
      );
   }
}


export default Recipe;