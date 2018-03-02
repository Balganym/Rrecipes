import React, { Component } from 'react'

class Ingredients extends Component {

  componentWillMount(){
    this.props.ingr.map(ix => {
      console.log(ix)
    })
  }

   render() {
    return(
      <div className="ingredients">
        <h4>Ingredients: </h4>
        <ul>
          {this.props.ingr.map((i, ix)=>{
            return(
              <li key={ix}>{i}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}


export default Ingredients;

