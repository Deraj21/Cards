import React from 'react';

export default function Card(rank, suit, i) {

  return (
    <div className={`card card-${(suit === 'diamonds' || suit === 'hearts') ? "red" : "black"}`} key={`card-${i}`}>
      <p className="rank">{rank}</p>
      <div className={`${suit}-logo suit-logo`}></div>
      <p className="rank rank-down">{rank}</p>
    </div>
  );
}
