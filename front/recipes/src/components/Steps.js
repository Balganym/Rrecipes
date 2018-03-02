import React, { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
};

class Steps extends Component {
   render() {
    return(
      <div className="Steps">
        <h4 className='font'>Steps: </h4>
        <div style={styles.root}>
          <GridList cellHeight={100} style={styles.gridList} cols={2.2}>
            {this.props.imgs.map((tile) => (
              <GridTile
                key={tile}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img style={{}} src={tile} />
              </GridTile>
            ))}
          </GridList>
        </div>
        <ul>
          {this.props.steps.map((i, ix)=>{
            return <li key={ix}>{i}</li>
          })}
        </ul>
      </div>
    );
  }
}


export default Steps;

