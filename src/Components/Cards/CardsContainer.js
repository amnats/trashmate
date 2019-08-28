import React from 'react';
import TrashCard from './TrashCard.js';

export default function CardsContainer({cards}) {
  return (
    <div className='cards-container'>
      {
        cards.map(card => <TrashCard key={card.key} data={card}/>)
      }
    </div>
  )
}
