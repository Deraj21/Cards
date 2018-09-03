import React, { Component } from 'react';
import Game from './components/Game';
import Hand from './components/Hand';
import './reset.css';
import './alt.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hand />
      </div>
    );
  }
}

export default App;
