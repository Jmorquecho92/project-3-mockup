import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {AgeCheck} from './AgeCheck.js';
import {Home} from './Home.js';
import {Find} from './Find.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
    <Router>
      <div>
      <AgeCheck />;
      <Route exact path="/" component={Home} />
      </div>
    </Router>
    );
  }
}

export default App;
