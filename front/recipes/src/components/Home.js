import React, { Component } from 'react';
import food from '../img/food.mp4'
import RecipeCard from './RecipeCard.js'
import {Route, Link} from 'react-router-dom'
import Recipe from './Recipe.js'
import {GridList} from 'material-ui/GridList';
import axios from 'axios'

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

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      redirect: null,
      categories: [],
    }
  }

  componentWillMount(){
    axios.get("http://localhost:8000/categories/")
      .then(res => {
        var categories = res.data
        this.setState({categories})
      })
  }

  handleRecipeClick = (id) => {
    this.props.onRecipeClick(id)
  }

  render(){
    return(
      <div className="Home">
        <div className="Home-top">
          <video autoPlay muted loop id="myVideo" className="video">
            <source src={food} type="video/mp4" />
          </video>
          <div className="content"></div>
        </div>
        <div className="Home-body">
          <div style={styles.root}>
            <GridList
              cols={3}
              cellHeight={300}
              padding={1}
              style={styles.gridList}
            >
              {this.state.categories.map((tile, ix) => (
                <Link to={"/" + tile.link} key={ix}>
                  <RecipeCard 
                    key = {ix}
                    recipe = {tile}
                    onRecipeClick = {this.handleRecipeClick}
                  />
                </Link>
              ))}
            </GridList>
            <Route path="/recipe" component={Recipe} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;







