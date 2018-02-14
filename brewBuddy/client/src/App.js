import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {AgeCheck} from './AgeCheck.js'
import {Home} from './Home.js'
import {Find} from './Find.js'

class App extends React.Component {
  render() {
    return (
      <div>
      <AgeCheck />
      <Home />;
      </div>
    );
  }
}

export default App;
