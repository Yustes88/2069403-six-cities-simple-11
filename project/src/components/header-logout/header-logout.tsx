import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { store } from '../../store';
import { requireAuthorization } from '../../store/action';
import HeaderProfile from '../header-user/header-user';


function HeaderLogout():JSX.Element {

  const handleOnLogoutClick = () => {
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  };

  return (
    <>
      <HeaderProfile/>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="#link" onClick={handleOnLogoutClick}>
          <span className="header__login">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default HeaderLogout;
