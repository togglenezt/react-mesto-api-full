import React from 'react';
import successfulRegistration from '../blocks/popup/images/successful-registration.svg';
import unSuccessfulRegistration from '../blocks/popup/images/unsuccessful registration.svg';

export default function InfoToolTip(props) {

  return (
    <article className={`popup popup_type_toolTip ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={props.onClose}></button>
        <img
          src={props.isSuccess ? successfulRegistration : unSuccessfulRegistration}
          alt={props.usSuccess ? 'иконка успешной регистрации' : 'иконка неуспешной регистрации'}
          className='popup__icon'
        />
        <p className='popup__message'>
          {props.isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}
        </p>
      </div>
    </article>

  )
}