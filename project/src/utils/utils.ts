import { Sorting } from "../const";
import { City, Offers } from "../types/types";

export const filteredOffersByCity = (currentCity: City, offers: Offers) =>
  offers.filter((offer) => offer.city.name === currentCity.name);

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  return date.toLocaleString("en-US", { month: "long", year: "numeric" });
};

export const sortValues = Object.values(Sorting);
