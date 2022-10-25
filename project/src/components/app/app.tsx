import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import NotFound from '../../pages/404/not-found';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';

type AppScreenProps = {
  totalAmount: number;
}

function App({totalAmount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<Main totalAmount={totalAmount}/>}/>
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.Offer} element={<Room/>}>
            <Route path={AppRoute.Id} element={<Room/>}/>
          </Route>
        </Route>
        <Route path={AppRoute.NotFound} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
