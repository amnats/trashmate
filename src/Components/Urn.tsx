import React from 'react';
import {urnTypes} from '../data';
import {RouteComponentProps} from 'react-router-dom';

interface RouteInfo {
  id: string
}

export default function Urn({match}: RouteComponentProps<RouteInfo>) {
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