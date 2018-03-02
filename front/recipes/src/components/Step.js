import React, { Component } from 'react';
import Description from './Description.js'

var id;
class Step extends Component {

    componentWillMount(){
      id = JSON.parse(localStorage.getItem("id"))
    }

   render() {
    return(
      <div className="recipe-wrapper">
        {this.props.recipes.map((r, ix) => {
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


export default Step;