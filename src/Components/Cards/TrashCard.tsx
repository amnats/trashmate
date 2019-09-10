import React from "react";
import Card from 'react-bootstrap/Card';
import {urnTypes, trashCard} from '../../data';
import { Link } from "react-router-dom";

export default function TrashCard({data} : {data: trashCard}) {
  const {
    label,
    urn: urnId,
    imgUrl,
    text
  } = data;

  const urn = urnTypes[urnId];
  const urnUrl = `${urnId}`;

  return (
    <Card>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{label}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Link to={urnUrl}>{urn.label}</Link>
      </Card.Body>
    </Card>
  )
}