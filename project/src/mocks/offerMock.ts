import { getRandomInteger } from '../components/utils/utils';
import { Offers, Reviews } from '../types/types';

const IMG_URL = 'img/apartment';
const getPicture = () => `${IMG_URL}-0${getRandomInteger(1, 3)}.jpg`;
function getRandomPic () {
  const list = ['img/apartment-01.jpg', 'img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'];
  return list[Math.floor((Math.random() * list.length))];
}

export const offerMock: Offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3673008,
        longitude: 4.8998197,
        zoom: 8,
      },
      name: 'Amsterdam',
    },
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable TV', 'Pets'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: true,
      name: 'Keks',
    },
    id: 1,
    images: Array.from({ length: 6 }, getPicture),
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: getRandomPic(),
    price: 500,
    rating: 3.9,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    type: 'Room',
  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.3673008,
        longitude: 4.8998197,
        zoom: 8,
      },
      name: 'Amsterdam',
    },
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    goods: ['Wifi', 'Kitchen', 'Pets'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Keks',
    },
    id: 4,
    images: Array.from({ length: 6 }, getPicture),
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: getRandomPic(),
    price: 500,
    rating: 3.9,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    type: 'Room',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3673008,
        longitude: 4.8998197,
        zoom: 8,
      },
      name: 'Amsterdam',
    },
    description: 'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable TV', 'Pets', 'Smoking area'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: false,
      name: 'Max',
    },
    id: 2,
    images: Array.from({ length: 6 }, getPicture),
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: getRandomPic(),
    price: 100,
    rating: 2.3,
    title: 'Lorem ipsum dolor sit amet',
    type: 'Apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.3673008,
        longitude: 4.8998197,
        zoom: 8,
      },
      name: 'Amsterdam',
    },
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    goods: ['Wifi', 'Heating', 'Kitchen', 'Pets', 'More pets'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 3,
      isPro: true,
      name: 'notKeks',
    },
    id: 3,
    images: Array.from({ length: 6 }, getPicture),
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: getRandomPic(),
    price: 125,
    rating: 4.3,
    title: 'Id cursus metus aliquam eleifend.',
    type: 'Small Room',
  }
];

export const ReviewsMock: Reviews = [
  {
    id: 1,
    user: {
      id: 12,
      isPro: true,
      name: 'Isaac',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/3.jpg'
    },
    rating: 4,
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2022-10-16T13:58:46.495Z'
  }, {
    id: 2,
    user: {
      id: 12,
      isPro: true,
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg'
    },
    rating: 2.5,
    comment: 'Could be better guys',
    date: '2022-10-16T13:58:46.495Z'
  }, {
    id: 2,
    user: {
      id: 11,
      isPro: false,
      name: 'Kate',
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    rating: 4.5,
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2022-01-01T13:58:46.495Z'
  }, {
    id: 3,
    user: {
      id: 10,
      isPro: true,
      name: 'Isaac',
      avatarUrl: 'img/avatar.jpg'
    },
    rating: 5,
    comment: 'Don/t listen to that cunt, it is awesome',
    date: '2022-12-11T13:58:46.495Z'
  }, {
    id: 4,
    user: {
      id: 9,
      isPro: false,
      name: 'Client',
      avatarUrl: 'img/avatar.jpg'
    },
    rating: 4,
    comment: 'Just awesome',
    date: '2022-07-08T13:58:46.495Z'
  },
];


// export const offerMock: Offers = [
//   {
//     id: '1',
//     pictures: Array.from({ length: 6 }, getPicture),
//     isPremium: true,
//     pricePerNight: 50,
//     propertyName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
//     lat: 52.3909553943508,
//     lng: 4.85309666406198,
//     propertyDescription: [
//       'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
//       'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
//     ],
//     propertyType: 'Room',
//     rate: 4,
//     bedroomNumber: 4,
//     maxGuests: 5,
//     houseItems: ['Wifi', 'Heating', 'Kitchen', 'Cable TV', 'Pets'],
//     host: {
//       avatar: 'img/avatar-max.jpg',
//       hostName: 'Keks',
//       isPro: true,
//     },
//     reviews: [
//       {
//         id: 1,
//         avatar: 'img/avatar-max.jpg',
//         userName: 'Max',
//         rateReview: 3.6,
//         date: '2019-04-29T12:00:00Z',
//         reviewText:
//           'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
//       },
//       {
//         id: 2,
//         avatar: 'img/avatar-max.jpg',
//         userName: 'Max',
//         rateReview: 3.6,
//         date: '2019-04-29T12:00:00Z',
//         reviewText:
//           'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
//       },
//     ],
//   },
//   {
//     id: '2',
//     pictures: Array.from({ length: 6 }, getPicture),
//     isPremium: true,
//     pricePerNight: 120,
//     propertyName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
//     lat: 52.3609553943508,
//     lng: 4.85309666406198,
//     propertyDescription: [
//       'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
//       'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
//     ],
//     propertyType: 'Apartment',
//     rate: 3.6,
//     bedroomNumber: 2,
//     maxGuests: 3,
//     houseItems: ['Wifi', 'Heating', 'Kitchen', 'Cable TV', 'Pets'],
//     host: {
//       avatar: 'img/avatar-max.jpg',
//       hostName: 'Keks',
//       isPro: true,
//     },
//     reviews: [
//       {
//         id: 1,
//         avatar: 'img/avatar-max.jpg',
//         userName: 'Max',
//         rateReview: 3.6,
//         date: '2019-04-29T12:00:00Z',
//         reviewText:
//           'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
//       },
//       {
//         id: 2,
//         avatar: 'img/avatar-max.jpg',
//         userName: 'Max',
//         rateReview: 3.6,
//         date: '2019-04-29T12:00:00Z',
//         reviewText:
//           'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
//       },
//     ],
//   },
//   {
//     id: '3',
//     pictures: Array.from({ length: 6 }, getPicture),
//     isPremium: false,
//     pricePerNight: 100,
//     propertyName: 'Lorem ipsum dolor sit amet',
//     lat: 52.3909553943508,
//     lng: 4.929309666406198,
//     propertyDescription: [
//       'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
//       'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
//     ],
//     propertyType: 'House',
//     rate: 3.6,
//     bedroomNumber: 2,
//     maxGuests: 3,
//     houseItems: ['Wifi', 'Heating', 'Kitchen', 'Cable TV', 'Pets'],
//     host: {
//       avatar: 'img/avatar-max.jpg',
//       hostName: 'Keks',
//       isPro: true,
//     },
//     reviews: [
//       {
//         id: 1,
//         avatar: 'img/avatar-max.jpg',
//         userName: 'Max',
//         rateReview: 3.6,
//         date: '2019-04-29T12:00:00Z',
//         reviewText:
//           'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
//       },
//       {
//         id: 2,
//         avatar: 'img/avatar-max.jpg',
//         userName: 'Max',
//         rateReview: 3.6,
//         date: '2019-04-29T12:00:00Z',
//         reviewText:
//           'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
//       },
//     ],
//   },
//   {
//     id: '4',
//     pictures: Array.from({ length: 6 }, getPicture),
//     isPremium: true,
//     pricePerNight: 150,
//     propertyName: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
//     lat: 52.3809553943508,
//     lng: 4.939309666406198,
//     propertyDescription: [
//       'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
//       'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
//     ],
//     propertyType: 'Hotel',
//     rate: 4.2,
//     bedroomNumber: 2,
//     maxGuests: 3,
//     houseItems: ['Wifi', 'Heating', 'Kitchen', 'Cable TV', 'Pets'],
//     host: {
//       avatar: 'img/avatar-max.jpg',
//       hostName: 'Keks',
//       isPro: true,
//     },
//     reviews: [
//       {
//         id: 1,
//         avatar: 'img/avatar-max.jpg',
//         userName: 'Max',
//         rateReview: 3.6,
//         date: '2019-04-29T12:00:00Z',
//         reviewText:
//           'Ac tortor vitae purus faucibus ornare suspendisse. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.',
//       },
//     ],
//   },
// ];
