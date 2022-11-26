import { Helmet } from 'react-helmet-async';
import { AuthorizationStatus } from '../../const';
import HeaderLogin from '../header-login/header-login';
import HeaderLogout from '../header-logout/header-logout';
import Logo from '../logo/logo';

type HeaderPropsType = {
  authorizationStatus: AuthorizationStatus;
}

function Header({authorizationStatus}: HeaderPropsType):JSX.Element {

  return (
    <>
      <Helmet>
        <title>Room</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              { authorizationStatus === AuthorizationStatus.Auth
                ?
                <HeaderLogout/>
                :
                <HeaderLogin/> }
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
