import React from 'react';
import { Link, Route } from 'react-router-dom';

export default function AuthForm(props) {

  return (
    <section className='auth'>

      <h2 className='auth__title'>{props.title}</h2>

      <form
        className='form auth__form'
        action='#'
        name={props.formName}
        onSubmit={props.onSubmit}
        noValidate
      >

        {props.children}

        <button
          className={props.isValid ? 'auth__button auth__button_active' : 'auth__button'}
          disabled={!props.isValid}
          type="submit">

          {props.submitButtonText}

        </button>

        <Route path = '/sign-up'>
          <p className = 'auth__caption'> Уже зарегистрированы? <Link className='auth__caption_type_link' to='/sign-in'>Войти</Link></p>
        </Route>

      </form>

    </section>
  )
}
