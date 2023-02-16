import React from 'react';
import logo from '../blocks/header/images/header__logo.svg';
import HeaderMenu from './HeaderMenu';
import { Route, Link, Switch } from 'react-router-dom';

function Header(props) {

  const [hamburgerMenuOpen, setHamburgerMenuOpen] = React.useState(false);

  function handleMenuClick() {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  }

  function handleSignOut() {
    props.onSignOut();
    setHamburgerMenuOpen(false);
  }

  return (
    <header className="header">
      <HeaderMenu
        userEmail={props.userEmail}
        onSignOut={handleSignOut}
        isOpen={hamburgerMenuOpen}
      />
      
      <div className='header__main'>

        <a href="#">
          <img src={logo} className="header__logo" alt="Логотип" />
        </a>

        <Switch>

          <Route path='/sign-in'>
            <Link to='/sign-up' className='header__link'>Регистрация</Link>
          </Route>

          <Route path='/sign-up'>
            <Link to='/sign-in' className='header__link'>Войти</Link>
          </Route>

          <Route path='/'>
            <button className={!hamburgerMenuOpen ? 'header__hamburger-button' : 'header__hamburger-button header__hamburger-button_opened'} onClick={handleMenuClick}></button>
          </Route>

        </Switch>

      </div>
    </header>
  )
}


export default Header;