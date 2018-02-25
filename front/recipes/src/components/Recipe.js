import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

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
         </div>
      );
   }
}


export default Recipe;