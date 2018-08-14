import React, { Component } from 'react';
import Hand from './Hand';

export default class Player extends Component {
  constructor(props){
    super(props);

    this.state = {
      hand: null
    };
  }
  
  render() {
    return (
      <div className="player">
        <h1>Player</h1>
        <Hand />
      </div>
    );
  }
}