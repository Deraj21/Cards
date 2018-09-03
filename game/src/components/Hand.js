import React, { Component } from "react";
import Card from './Card/Card';

export default class Hand extends Component {
  constructor(){
    super();

    this.state = {
      cards: [
        { rank: 'K', suit: 'diamonds' },
        { rank: 'K', suit: 'hearts' },
        { rank: 'K', suit: 'spades' },
        { rank: 'K', suit: 'clubs' },
      ]
    };
  }

  addCard(card){
    let newCards = [...this.state.cards];
    newCards.push(this.state.cards);
    this.setState({ cards: newCards });
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
        <div className="cards">
          { cards }
        </div>
      </div>
    );
  }
}
