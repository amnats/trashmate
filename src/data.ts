import { ReactElement } from 'react';

export interface trashCard {
  key: string,
  label: string,
  text: string | ReactElement,
  urn: string,
  imgUrl: string
}


// добавить еще типы мусора
const trashItems: trashCard[] = [
  {
    key: 'aluminum_can',
    label: 'Алюминиевая банка',
    text: 'Перед сдачей промыть.',
    urn: 'aluminum',
    imgUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fatlas-content-cdn.pixelsquid.com%2Fstock-images%2Fgeneric-can-355ml-aluminum-lOQRv17-600.jpg&f=1'
  },
  {
    key: 'tetrapak',
    label: 'Тетрапак',
    text: 'Упаковки от соков и молока. Перед сдачей промыть и сплющить.',
    urn: 'paper',
    imgUrl: 'https://www.retail-loyalty.org/upload/medialibrary/027/0278ccffd56e6dae192a36f723403f47.jpg'
  },
  {
    key: 'plastic_bottle',
    label: 'Пластиковая бутылка',
    text: 'Перед сдачей промыть, снять этикетку и открутить крышку. Крышки можно скопить и сдать в специальный пункт приема.',
    urn: 'plastic',
    imgUrl: 'http://www.trental.ru/wp-content/uploads/2017/06/1498198288_neuron-3.jpg'
  },
  {
    key: 'youghurt_packet',
    label: 'Стаканчик из-под йогурта, сметаны',
    text: 'Перед сдачей промыть, снять этикетку и вставить стаканчики один в другой.',
    urn: 'plastic',
    imgUrl: 'https://pbs.twimg.com/media/CAM-3WrVAAE2yWI.jpg'
  },
  {
    key: 'food_waste',
    label: 'Пищевые отходы',
    text: 'К пищевым отходам также относятся упаковки, загрязненные пищевыми отходами, которые невозможно очистить. Например, картонные коробки от пиццы, на которых есть следы жира.',
    urn: 'non_sortable',
    imgUrl: 'https://i1.wp.com/s5.travelask.ru/system/images/files/001/032/151/wysiwyg/food-waste.jpg'
  }
]

export interface urnType {
  label: string,
  text?: string | ReactElement,
  imgUrl?: string
} 

const urnTypes: {[name: string]: urnType} = {
  'aluminum': {
    label: 'вторсырье, алюминий',
    text: 'алюминий :)'
  },
  'paper': {
    label: 'вторсырье, бумага'
  },
  'plastic': {
    label: 'вторсырье, пластик'
  },
  'non_sortable': {
    label: 'несортируемый'
  }
}

export {
  trashItems,
  urnTypes
}