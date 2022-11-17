import { filteredOffersByCity } from '../components/utils/utils';
import { City, Offers } from '../types/types';

export const getFilteredOffers = (selectedCity: City, state: Offers) => filteredOffersByCity(selectedCity, state);
