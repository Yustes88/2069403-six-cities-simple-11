import { filteredOffersByCity } from '../components/utils/utils';
import { City, Offers } from '../types/types';

export const getFilteredOffers = (state: { currentCity: City; offersList: Offers }) => filteredOffersByCity(state.currentCity, state.offersList);
