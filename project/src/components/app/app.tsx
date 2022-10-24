import {Route, BrowserRouter, Routes} from 'react-router-dom';
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
        <Route path='/'>
          <Route index element={<Main totalAmount={totalAmount}/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='offer/:id' element={<Room/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
