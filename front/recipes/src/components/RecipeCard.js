import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {GridTile} from 'material-ui/GridList';

const styles = {
  titleStyle: {
   fontFamily: "Dancing Script, cursive"
  },
};
class RecipeCard extends Component {

   handleClick = () => {
      this.props.onRecipeClick(this.props.recipe.id);
   }

   render() {
      return(
         <GridTile
            key={this.props.recipe.mainImg}
            title={this.props.recipe.name}
            actionPosition="left"
            titlePosition="top"
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
         >
            <div className="tile">
               <Link to='/recipe'>
                  <img 
                     onClick={this.handleClick} 
                     src={this.props.recipe.mainImg} />
               </Link>
            </div>
         </GridTile>
      );
   }
}

export default RecipeCard;