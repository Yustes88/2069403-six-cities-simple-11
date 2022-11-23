import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute} from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from '../../pages/404/not-found';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import { City } from '../../types/types';
import { useEffect } from 'react';
import { setOffersList } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';

type AppScreenProps = {
  cities: City[];
};

function App({ cities }: AppScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  const offers = useAppSelector((state) => state.offers);

  useEffect(() => {
    dispatch (setOffersList(offers));
  }, [offers, dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route
              index
              element={<Main offers={offers} cities = {cities} />}
            />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route path={AppRoute.Offer}>
              <Route path={AppRoute.Id} element={<Room offers={offers} />} />
            </Route>
          </Route>
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
