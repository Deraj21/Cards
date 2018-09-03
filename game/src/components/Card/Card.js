import React from 'react';
import './Card.css';

export default function Card(rank, suit, i) {

  function dragStart(e){
    let card = document.querySelector(`#card-${i}`);
    
    card.className += " hold";
    // let cardImg = card.cloneNode(true);
    // e.dataTransfer.setDragImage(cardImg, 0, 0);
    setTimeout(() => card.className = "hidden", 0);
    
  }

  function dragEnd(){
    let card = document.querySelector(`#card-${i}`);
    card.className = getClassName();
  }

  function getClassName(){
    return `card card-${(suit === 'diamonds' || suit === 'hearts') ? "red" : "black"}`;
  }

  return (
    <div onDragEnd={() => dragEnd()} onDragStart={e => dragStart(e)} draggable="true" className={getClassName()} id={`card-${i}`}>
      <p className="rank">{rank}</p>
      <div className={`${suit}-logo suit-logo`}></div>
      <p className="rank rank-down">{rank}</p>
    </div>
  );
}
