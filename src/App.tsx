import React from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import CardsContainer from './Components/Cards/CardsContainer';
import Urn from './Components/Urn';
import {trashItems} from './data';
import { Route, Switch } from 'react-router-dom';

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

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
function Home() {
  return (
  <>
    {/* <div className='search-block'>
      <input type='text' />
    </div> */}
    <nav>
      <ol>

      </ol>
    </nav>
    <CardsContainer cards={trashItems} />
  </>);
}

export default App;
