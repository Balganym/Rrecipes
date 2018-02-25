import React, { Component } from 'react';

class Recipe extends Component {
   constructor(props){
      super(props)
      this.state = ({
         recipe: "",
         step: "",
         recipes: [],
         method: []
      })
   }

   render() {
      return(
         <div className = "Recipe"> 
            REcipeeeeee
         </div>
      );
   }
}


export default Recipe;