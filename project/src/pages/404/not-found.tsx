import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';

function NotFound(): JSX.Element {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            {<Logo/>}
          </div>
        </div>
      </header>
      <main className="container page__main page__main--index">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </main>
    </>
  );
}

export default NotFound;
