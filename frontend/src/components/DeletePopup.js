import React from 'react';

import PopupWithForm from './PopupWithForm';

export default function DeletePopup(props) {

  function handleSubmit(e) {
    e.preventDefault();

    props.onDeleteCard(props.selectedCard)
  }

  
  return(
    <PopupWithForm
          name="delete"
          title="Вы уверены?"
          buttonText="Да" 
          isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
          />
  )
}