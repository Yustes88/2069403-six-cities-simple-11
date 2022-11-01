import getRandomInteger from '../components/utile/utile';
import { Offers } from '../types/offer-type-full';

const IMG_URL = 'img/apartment';
const getPicture = () => `${IMG_URL}-0${getRandomInteger(1, 3)}.jpg`;

export const offerMock: Offers = [
  {
    id: '1',
    pictures: Array.from({ length: 6 }, getPicture),
    isPremium: true,
    pricePerNight: 50,
    propertyName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    propertyDescription: [
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    ],
    propertyType: 'Room',
    rate: 4,
    bedroomNumber: 4,
    maxGuests: 5,
    houseItems: ['Wifi', 'Heating', 'Kitchen', 'Cable TV', 'Pets'],
    host: {
      avatar: 'img/avatar-max.jpg',
      hostName: 'Keks',
      isPro: true,
    },
    reviews: [
      {
        avatar: 'img/avatar-max.jpg',
        userName: 'Max',
        rateReview: 3.6,
        date: '2019-04-29T12:00:00Z',
        reviewText:
          'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
      },
      {
        avatar: 'img/avatar-max.jpg',
        userName: 'Max',
        rateReview: 3.6,
        date: '2019-04-29T12:00:00Z',
        reviewText:
          'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
      },
    ],
  },
  {
    id: '2',
    pictures: Array.from({ length: 6 }, getPicture),
    isPremium: true,
    pricePerNight: 120,
    propertyName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    propertyDescription: [
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    ],
    propertyType: 'Apartment',
    rate: 3.6,
    bedroomNumber: 2,
    maxGuests: 3,
    houseItems: ['Wifi', 'Heating', 'Kitchen', 'Cable TV', 'Pets'],
    host: {
      avatar: 'img/avatar-max.jpg',
      hostName: 'Keks',
      isPro: true,
    },
    reviews: [
      {
        avatar: 'img/avatar-max.jpg',
        userName: 'Max',
        rateReview: 3.6,
        date: '2019-04-29T12:00:00Z',
        reviewText:
          'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
      },
      {
        avatar: 'img/avatar-max.jpg',
        userName: 'Max',
        rateReview: 3.6,
        date: '2019-04-29T12:00:00Z',
        reviewText:
          'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
      },
    ],
  }, {
    id: '3',
    pictures: Array.from({ length: 6 }, getPicture),
    isPremium: false,
    pricePerNight: 100,
    propertyName: 'Lorem ipsum dolor sit amet',
    propertyDescription: [
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    ],
    propertyType: 'House',
    rate: 3.6,
    bedroomNumber: 2,
    maxGuests: 3,
    houseItems: ['Wifi', 'Heating', 'Kitchen', 'Cable TV', 'Pets'],
    host: {
      avatar: 'img/avatar-max.jpg',
      hostName: 'Keks',
      isPro: true,
    },
    reviews: [
      {
        avatar: 'img/avatar-max.jpg',
        userName: 'Max',
        rateReview: 3.6,
        date: '2019-04-29T12:00:00Z',
        reviewText:
          'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
      },
      {
        avatar: 'img/avatar-max.jpg',
        userName: 'Max',
        rateReview: 3.6,
        date: '2019-04-29T12:00:00Z',
        reviewText:
          'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
      },
    ],
  }, {
    id: '4',
    pictures: Array.from({ length: 6 }, getPicture),
    isPremium: true,
    pricePerNight: 150,
    propertyName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    propertyDescription: [
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    ],
    propertyType: 'Hotel',
    rate: 4.2,
    bedroomNumber: 2,
    maxGuests: 3,
    houseItems: ['Wifi', 'Heating', 'Kitchen', 'Cable TV', 'Pets'],
    host: {
      avatar: 'img/avatar-max.jpg',
      hostName: 'Keks',
      isPro: true,
    },
    reviews: [
      {
        avatar: 'img/avatar-max.jpg',
        userName: 'Max',
        rateReview: 3.6,
        date: '2019-04-29T12:00:00Z',
        reviewText:
          'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
      },
      {
        avatar: 'img/avatar-max.jpg',
        userName: 'Max',
        rateReview: 3.6,
        date: '2019-04-29T12:00:00Z',
        reviewText:
          'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
      },
    ],
  },
];
