import React from 'react';
import {urnTypes} from '../data';

interface matchParams {
  id: string
}

export default function Urn({match} : {match: match<matchParams>}) {
  const {id} = match.params;
  const urn = urnTypes[id];
  const {label, text, imgUrl} = urn;

  return (
    <article>
      <header>
        <img src={imgUrl} alt={label} />
        <h2>{label}</h2>  
      </header>
      <section className='main'>
        {text}
      </section>
    </article>
  );
}