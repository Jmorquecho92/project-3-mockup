import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {AgeCheck} from './AgeCheck.js';
import {Home} from './Home.js';
import {Find} from './Find.js';
import {Taproom} from './VirtualTaproom.js';
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
      <Route exact path="/" component={Home} />
      <Route exact path="/Find" component={Find} />
      <Route exact path="/Taproom" component={Taproom} />
      </div>
    </Router>
    );
  }
}

export default App;
