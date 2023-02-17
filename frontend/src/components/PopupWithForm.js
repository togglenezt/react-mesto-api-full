import React from 'react';

function PopupWithForm(props) {

  return (
    <article className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <form action="#" className="form popup__container" name={props.name} onSubmit={props.onSubmit} noValidate>
        <button className="popup__close" type="button" onClick={props.onClose}></button>
        <h2 className="popup__caption">{props.title}</h2>
        {props.children}
        <button disabled={props.isDisabled} className={!props.isDisabled ? "popup__submit popup__submit_active" : "popup__submit"} type="submit">{props.buttonText}</button>
      </form>
    </article>
  )

}

export default PopupWithForm;