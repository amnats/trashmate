import React from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import CardsContainer from './Components/Cards/CardsContainer.js';

const trashTypes = [
  {
    key: '1',
    type: 'алюминиевая банка',
    urn: 'вторсырье, алюминий',
    imgUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fatlas-content-cdn.pixelsquid.com%2Fstock-images%2Fgeneric-can-355ml-aluminum-lOQRv17-600.jpg&f=1'
  },
  {
    key: '2',
    type: 'тетрапак',
    urn: 'вторсырье, картон',
    imgUrl: 'https://www.retail-loyalty.org/upload/medialibrary/027/0278ccffd56e6dae192a36f723403f47.jpg'
  },
  {
    key: '3',
    type: 'Пищевые отходы',
    urn: 'несортируемый',
    imgUrl: 'https://i1.wp.com/s5.travelask.ru/system/images/files/001/032/151/wysiwyg/food-waste.jpg'
  }
]

function App() {
  return (
    <Container>
      <div className='search-block'>
        <input type='text' />
      </div>
      <CardsContainer cards={trashTypes} />
    </Container>
  );
}

export default App;
