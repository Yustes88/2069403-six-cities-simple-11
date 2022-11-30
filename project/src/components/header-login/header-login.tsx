import { Link } from 'react-router-dom';
import { APIRoute } from '../../const';


function HeaderLogin():JSX.Element {


  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to={APIRoute.Login}>
        <span className="header__signout">Sign in</span>
      </Link>
    </li>
  );
}

export default HeaderLogin;
