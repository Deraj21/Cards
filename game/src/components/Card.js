import React from 'react';

export default function Card(rank, suit, i) {
  return (
    <div className="card" key={`card-${i}`}>
      <div className="card-contents">
        <span>{rank} of {suit}</span>
      </div>
    </div>
  );
}
