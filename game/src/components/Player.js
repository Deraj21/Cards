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
    let { name } = this.props;

    return (
      <div className="player">
        <h1>Player: {name}</h1>
        <Hand />
      </div>
    );
  }
}