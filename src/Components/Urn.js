import React from 'react';
import {urnTypes} from '../data.js';

export default function Urn({match}) {
  const {id} = match.params;
  const urn = urnTypes[id];
  const {label, text, imgUrl} = urn;

  return (
    <article>
      <h2>{label}</h2>
      <p>{text}</p>
    </article>
  );
}