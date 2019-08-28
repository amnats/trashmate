import React from 'react';
import {urnTypes} from '../data.js';

export default function Urn({match}) {
  const {id} = match.params;
  const urn = urnTypes[id];
  const {imgUrl, text} = urn;
  console.log('render urn');
  return (
    <div>
    test
      {text}
    </div>
  );
}