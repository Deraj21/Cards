import React, { Component } from 'react';
import Card from './Card';
import orders from './orders';

export default class Deck extends Component {
  constructor(){
    super();

    this.state = {
      cards: []
    };

    for (let i = 0; i < orders.suits.length; i++){
      for (let j = 0; j < orders.ranks.length; j++){
        this.state.cards.push( new Card(orders.ranks[j], orders.suits[i]) );
      }
    }
  }

  getRand() {
    return Math.floor(Math.random() * this.state.cards.length);
  }
  
  shuffle() {
    let shuffled = [];
    while(this.state.cards.length !== 0){
      let rand = this.getRand();
      shuffled.push(this.state.cards.splice(rand, 1)[0]);
    }
    
    this.setState({ cards: [...shuffled] });
  }
  
  drawCard() {
    let newCards = this.state.cards;
    let drawnCard = newCards.shift();
    this.setState({ cards: newCards });
    return drawnCard;
  }

  addCard(card, place){
    if (place === 'bottom'){
      let newCards = this.state.cards;
      newCards.push(card);
      this.setState({ cards: newCards});
      return;
    }
    if (place === 'top') {
      let newCards = this.state.cards;
      newCards.unshift(card);
      this.setState({ cards: newCards});
      return;
    }
    if (place === 'random') {
      
      let newCards = this.state.cards;
      newCards.splice(this.getRand(), 0, card);
      this.setState({ cards: newCards});
      return;
    }
  }

  render() {

    return (
      <div className="deck">
        <h1>Deck</h1>
      </div>
    );
  }
  
}