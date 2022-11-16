import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute} from '../../const';
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
  cities: City[];
};

function App({ totalAmount, offers, reviews, cities }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route
              index
              element={<Main totalAmount={totalAmount} offers={offers} cities = {cities} />}
            />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route path={AppRoute.Offer}>
              <Route path={AppRoute.Id} element={<Room offers={offers} reviews = {reviews} cities = {cities} />} />
            </Route>
          </Route>
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
