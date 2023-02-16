import React from 'react';

import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';
import useFormValidator from '../hooks/useFormValidator';

export default function EditProfilePopup(props) {

  const {
    values,
    errors,
    isElementValid,
    handleElementChange,
    resetFormInputs
  } = useFormValidator({});

  
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser(values);
  }

  React.useEffect(() => {
    if (currentUser) {
      resetFormInputs(currentUser);
    }
  }, [currentUser, resetFormInputs, props.isOpen]);

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isDisabled={!isElementValid}
    >
      <input
        type="text"
        className={errors.name ? "popup__text popup__text_type_error" : "popup__text"}
        id="name-input"
        name="name"
        required
        minLength="2"
        maxLength="40"
        value={values.name || ""}
        onChange={handleElementChange}
      />

      <span className={errors.name ? "popup__text-error popup__text-error_visible" : "popup__text-error"}>
        {errors.name}
      </span>

      <input
        type="text"
        className={errors.about ? "popup__text popup__text_type_error" : "popup__text"}
        id="caption-input"
        name="about"
        required
        minLength="2"
        maxLength="200"
        value={values.about || ""}
        onChange={handleElementChange}
      />

      <span className={errors.about ? "popup__text-error popup__text-error_visible" : "popup__text-error"}>
          {errors.about}
      </span>
    </PopupWithForm>
  )
}