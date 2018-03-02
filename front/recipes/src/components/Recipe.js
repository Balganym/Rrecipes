import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Recipe extends Component {

   handleClick = () => {
      this.props.onRecipeClick(this.props.recipe.id);
   }

   render() {
      return(
         <div className="box box-small" style={{backgroundImage: "url(" + this.props.recipe.mainImg + ")"}}>
            <span className="cover">
               <Link onClick={this.handleClick} to='/recipe'>{this.props.recipe.name}</Link>
            </span>
          </div>
      );
   }
}


export default Recipe;