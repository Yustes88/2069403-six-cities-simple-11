import Offer from '../types/offer';

const offersMock: Offer[] = [{
  id: 0,
  src: 'apartment-01.jpg',
  isPremium: true,
  pricePerNight: 50,
  description: 'Beautiful & luxurious apartment at great location',
  type: 'apartment',
  rate: 4,
}, {
  id: 1,
  src: 'apartment-02.jpg',
  isPremium: false,
  pricePerNight: 100,
  description: 'Lorem ipsum',
  type: 'room',
  rate: 2.4,
},{
  id: 2,
  src: 'apartment-small-03.jpg',
  isPremium: false,
  pricePerNight: 150,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  type: 'house',
  rate: 3.8,
},{
  id: 3,
  src: 'apartment-small-04.jpg',
  isPremium: true,
  pricePerNight: 110,
  description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  type: 'hotel',
  rate: 4.2,
},
];

export default offersMock;
