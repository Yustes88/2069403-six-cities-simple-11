import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks';
import { requireAuthorization } from '../../store/action';
import { logoutAction } from '../../store/api-actions';

function HeaderLogout():JSX.Element {
  const dispatch = useAppDispatch();

  const handleOnLogoutClick = () => {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(logoutAction());
  };

  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to="#link" onClick={handleOnLogoutClick}>
        <span className="header__login">Sign out</span>
      </Link>
    </li>
  );
}

export default HeaderLogout;
