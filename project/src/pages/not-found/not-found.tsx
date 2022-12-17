import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';

function NotFound(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            {<Logo/>}
          </div>
        </div>
      </header>
      <main className="container page__main page__main--index">
        <h1>404 Not Found</h1>
        <Link to={AppRoute.Root}>Вернуться на главную</Link>
      </main>
    </>
  );
}

export default NotFound;
