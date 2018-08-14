import React, { Component } from 'react';
import Player from './Player';
import Deck from './Deck';

export default class Game extends Component {
  constructor(){
    super();

    this.state = {
      players: [],
      deck: null,
      currentPlayer: 0,
    };

  }

  render() {
    
    return (
      <div className="game">
        <h1>Game</h1>
        <Deck />
        <Player />
      </div>
    );
  }
};