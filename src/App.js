import React from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import CardsContainer from './Components/Cards/CardsContainer.js';
import Urn from './Components/Urn.js';
import {trashItems} from './data.js';
import { Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Container>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/:id" component={Urn} />
      </Switch>
    </Container>
  );
}

function Home() {
  return (
  <>
    {/* <div className='search-block'>
      <input type='text' />
    </div> */}
    <CardsContainer cards={trashItems} />
  </>);
}

export default App;
