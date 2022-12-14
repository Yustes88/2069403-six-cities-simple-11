import { FormEvent, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../../components/logo/logo';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { switchCity } from '../../store/client/action';
import { loginAction } from '../../store/user/api-actions';

import { AuthData } from '../../types/auth-data';
import { getRandomCity } from '../../utils/utils';

function Login():JSX.Element {
  const authStatus = useAppSelector((state) => state.userReducer.authorizationStatus);

  const dispatch = useAppDispatch();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const randomCity = getRandomCity();

  const onSubmit = (userData: AuthData) => {
    dispatch(loginAction(userData));
  };

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (emailRef.current === null || passwordRef.current === null) {
      toast.error('All fields are required');
      return;
    }

    if (!/.+@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailRef.current.value)) {
      toast.error(`Invalid email ${emailRef.current.value}`);
      return;
    }

    if (!/[A-Za-z]/.test(passwordRef.current.value)) {
      toast.error('Your password is required to have at least one letter');
      return;
    }

    if (!/[\d]/.test(passwordRef.current.value)) {
      toast.error('Your password is required to have at least one number');
      return;
    }


    if (emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      );
    }
  };

  if (authStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  const handleLocationClick = () => {
    dispatch(switchCity(randomCity));
  };

  return(
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <Logo/>
            </div>
          </div>
        </header>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input ref={emailRef} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Root} onClick={handleLocationClick}>
                  <span>{randomCity.name}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Login;
