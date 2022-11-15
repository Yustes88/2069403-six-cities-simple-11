import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, citiesList } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from '../../pages/404/not-found';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import { City, Offers, Reviews } from '../../types/types';

type AppScreenProps = {
  totalAmount: number;
  offers: Offers;
  reviews: Reviews;
  city: City;
};

function App({ totalAmount, offers, reviews, city }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route
              index
              element={<Main totalAmount={totalAmount} offers={offers} city={city} cities = {citiesList} />}
            />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route path={AppRoute.Offer}>
              <Route path={AppRoute.Id} element={<Room offers={offers} city ={city} reviews = {reviews} />} />
            </Route>
          </Route>
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
