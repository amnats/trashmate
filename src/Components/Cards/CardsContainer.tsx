import React from 'react';
import TrashCard from './TrashCard';
import {trashCard} from '../../data';

export default function CardsContainer({cards}: {cards: trashCard[]}) {
  return (
    <article className='cards-container'>
      {
        cards.map(card => <TrashCard key={card.key} data={card}/>)
      }
    </article>
  )
}
