import React, { Component } from "react";
import Card from './Card';

export default class Hand extends Component {
  constructor(){
    super();

    this.state = {
      cards: [ // dummy data right now
        { rank: 'King', suit: 'Spades'},
        { rank: 'Ace', suit: 'Hearts'},
        { rank: 'Three', suit: 'Clubs'},
        { rank: 'Queen', suit: 'Diamonds'},
        { rank: 'Ten', suit: 'Spades'},
        { rank: 'Seven', suit: 'Diamonds'},
      ]
    };
  }

  addCard(card){
    let newCards = [...this.state.cards];
    newCards.push(this.state.cards);
    this.setState({  cards: newCards });
  }

  removeCard(index){
    let newCards = [...this.state.cards];
    let card = newCards.splice(index, 1);
    this.setState({  cards: newCards });
    return card;
  }

  
  render() {
    let cards = this.state.cards.map((card, i) => Card(card.rank, card.suit, i) );
    
    return (
      <div className="hand">
        <h1>Hand</h1>
        <div className="cards">
          { cards }
        </div>
      </div>
    );
  }
}