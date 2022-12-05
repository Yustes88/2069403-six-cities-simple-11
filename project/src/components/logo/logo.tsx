import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { memo } from 'react';

function Logo():JSX.Element {
  return(
    <div className="header__left">
      <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root} title='Jump to main page'>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </Link>
    </div>
  );
}

export default memo(Logo);
