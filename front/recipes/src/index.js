import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(
  <div className="Page">
    <Header />
    <Router>
      <div>
        <Route path="/recipe" component={Recipe}/>
      </div>
    </Router>
  </div>,
  document.getElementById('root')
);
