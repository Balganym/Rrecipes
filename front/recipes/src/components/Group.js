import React, { Component } from 'react';
import RecipeCard from './RecipeCard.js'
import {GridList} from 'material-ui/GridList';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '20px'
  },
  gridList: {
    width: '100%',
    height: 'auto',
    overflowY: 'auto',
  },
};

class Group extends Component {
  
  handleRecipeCardClick = (id) => {
    this.props.onRecipeClick(id)
  }
  render(){
    return(
    <div className="page">
      <div className="headerImg">
        <img src={this.props.img} alt="img"/>
      </div>
        <div style={styles.root}>
          <GridList
            cols={4}
            cellHeight={250}
            padding={1}
            style={styles.gridList}
          >
            {this.props.desserts.map((tile, ix) => (
              <RecipeCard 
                key = {ix}
                recipe = {tile}
                curRecipe={this.props.curRecipe}
                onRecipeClick = {this.handleRecipeCardClick}
              />
            ))}
          </GridList>
        </div>
    </div>
    )
  }
}

export default Group;