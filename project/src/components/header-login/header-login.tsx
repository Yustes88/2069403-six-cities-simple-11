import { Link } from 'react-router-dom';
import { APIRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';


function HeaderLogin():JSX.Element {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to={APIRoute.Login} onClick={handleLogout}>
        <span className="header__signout">Sign in</span>
      </Link>
    </li>
  );
}

export default HeaderLogin;
