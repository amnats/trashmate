import React from 'react';
import './App.css';
import CardsContainer from './Components/Cards/CardsContainer';
import Urn from './Components/Urn';
import {trashItems} from './data';
import { Route, Switch } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

// https://reacttraining.com/react-router/core/guides/philosophy
function App() {
  const screenIsSmall = false;
  let routes;
  if (screenIsSmall) {
    routes = 
    (<Switch>
      <Route exact path='/' component={TrashCards} />
      <Route path='/:id' component={Urn} />
    </Switch>);
  } else {
    routes = <Route path='/' component={TrashCards} />;
  }

  return (
    <Container>
      {routes}
    </Container>
  );
}

function Info() {
  return (<>Info</>);
}

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
function TrashCards({screenIsSmall}: {screenIsSmall: boolean}) {
  let rightPan
  if (screenIsSmall) {
    rightPan = <></>;
  } else {
    rightPan = (<>
    <Switch>
      <Route exact path='/' component={Info} />
      <Route path='/:id' component={Urn} />
    </Switch>
    </>);
  }

  return (
  <>
    {/* <div className='search-block'>
      <input type='text' />
    </div> */}
    <nav>
      <ol>
      </ol>
    </nav>
    <Row>
        <Col xs lg='5'>
          <CardsContainer cards={trashItems} />
        </Col>
        <Col xs lg='7'>
          <div className='rightPan'>
           {rightPan}
          </div>
        </Col>
    </Row>
  </>);
}

export default App;
