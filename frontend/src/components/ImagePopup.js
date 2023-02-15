import React from 'react';

function ImagePopup(props) {
  
  return (
    <article className={`popup popup_type_card-image ${props.isOpen?'popup_opened':''}`}>
      <figure className="popup__image-container">
        <button className="popup__close popup__close_type_card-image" type="button" onClick={props.onClose}></button>
        <img src={props.card.link} className="popup__image" alt={props.card.name} />
        <figcaption className="popup__figcaption">{props.card.name}</figcaption>
      </figure>
    </article>
  )
}

export default ImagePopup;