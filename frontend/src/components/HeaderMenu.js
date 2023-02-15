import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default function HeaderMenu(props) {

  return (
    <Switch>
      <Route exact path='/'>
        <nav className={props.isOpen ? 'header__menu header__menu_opened' : 'header__menu'}>
            <p className='header__email'>{props.userEmail}</p>
          <button className='header__sign-out' onClick={props.onSignOut}>Выйти</button>
        </nav>
      </Route>
    </Switch>
  )
}