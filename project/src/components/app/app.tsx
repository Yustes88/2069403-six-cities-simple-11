import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from '../../pages/404/not-found';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import { Offers} from '../../types/offer-type-full';

type AppScreenProps = {
  totalAmount: number;
  offers: Offers;
};

function App({ totalAmount, offers }: AppScreenProps): JSX.Element {
  const [firstOffer] = offers;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index element={<Main totalAmount={totalAmount} offers={offers}/>} />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route
              path={AppRoute.Id}
              element={<Room offer={firstOffer} />}
            >
              {/* <Route path={AppRoute.Id} element={<Room/>}/> */}
            </Route>
          </Route>
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
