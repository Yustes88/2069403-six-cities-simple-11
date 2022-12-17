import { useAppSelector } from '../../hooks';

function HeaderUser():JSX.Element {
  const user = useAppSelector((state) => state.userReducer.userData);

  if(user){
    return (
      <li className="header__nav-item user">
        <div className="header__nav-profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img
              className="user__avatar"
              src={user.avatarUrl}
              width="20"
              height="20"
              alt={user.name}
            />
          </div>
          <span className="header__user-name user__name">
            {user.email}
          </span>
        </div>
      </li>
    );
  } else {
    return (
      <li className="header__nav-item user">
      </li>
    );
  }

}

export default HeaderUser;
