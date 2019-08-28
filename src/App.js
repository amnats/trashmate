import React from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import CardsContainer from './Components/Cards/CardsContainer.js';
import Urn from './Components/Urn.js';
import {trashItems} from './data.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <Container>
      <Route path='/' component={Cont} />
      <Route path="/:id" component={Urn} />
    </Container>

    </Router>
  );
}

function Cont() {
  return (
  <>
    {/* <div className='search-block'>
      <input type='text' />
    </div> */}
    <CardsContainer cards={trashItems} />
  </>);
}

export default App;
