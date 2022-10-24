import {Route, BrowserRouter, Routes} from 'react-router-dom';
import NotFound from '../../pages/404/not-found';
import Login from '../../pages/login/login';
import MainPage from '../../pages/main-page/main-page';
import Property from '../../pages/property/property';

type AppScreenProps = {
  totalAmount: number;
}

function App({totalAmount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage totalAmount={totalAmount}/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='offer/:id' element={<Property/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
