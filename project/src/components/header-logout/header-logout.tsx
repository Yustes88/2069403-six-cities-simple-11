import { Link } from 'react-router-dom';
import HeaderProfile from '../header-user/header-user';


function HeaderLogout():JSX.Element {
  return (
    <>
      <HeaderProfile/>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="#link">
          <span className="header__login">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default HeaderLogout;
