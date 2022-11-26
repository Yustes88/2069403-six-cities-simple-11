import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute} from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from '../../pages/404/not-found';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import { City } from '../../types/types';
import { useAppSelector } from '../../hooks';

type AppScreenProps = {
  cities: City[];
};

function App({ cities }: AppScreenProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);


  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route
              index
              element={<Main cities = {cities} authorizationStatus={authorizationStatus}/>}
            />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route path={AppRoute.Offer}>
              <Route path={AppRoute.Id} element={<Room />} />
            </Route>
          </Route>
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
