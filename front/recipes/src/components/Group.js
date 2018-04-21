import React, { Component } from 'react';
import RecipeCard from './RecipeCard.js'
import {GridList} from 'material-ui/GridList';
import axios from 'axios'

const URL = 'http://localhost:8000/'

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

  constructor(props){
    super(props)
    this.state = {
      recipe: [],
    }
  }

  componentWillMount(){
    console.log("Axios starts")
    axios.get(this.props.link).then(res => {
      var recipe = res.data
      console.log(recipe)
      this.setState({recipe})
    })
  }

  render(){
    const {desserts} = this.props
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
            {this.state.recipe.map((r, ix) => {
              return(
                <RecipeCard 
                  key = {ix}
                  recipe = {r}
                  curRecipe={this.props.curRecipe}
                  onRecipeClick = {this.handleRecipeCardClick}
                />
              )
            })}
          </GridList>
        </div>
    </div>
    )
  }
}

export default Group;