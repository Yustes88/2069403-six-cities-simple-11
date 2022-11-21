import { filteredOffersByCity } from '../utils/utils';
import { City, Offers } from '../types/types';

export const getFilteredOffers = (state: {
  currentCity: City;
  offersList: Offers;
}) => filteredOffersByCity(state.currentCity, state.offersList);


export const getSortedOffers = (state: {
  currentSorting: string;
  offersList: Offers;
  currentCity: City;
},
) => {
  const filteredOffers = getFilteredOffers(state);
  switch (state.currentSorting) {
    case 'Price: low to high':
      return filteredOffers.sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return filteredOffers.sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return filteredOffers.sort((a, b) => b.rating - a.rating);
    default:
      return filteredOffers;
  }
};
