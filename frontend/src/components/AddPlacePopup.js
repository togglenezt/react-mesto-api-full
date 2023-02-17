import React from 'react';
import useFormValidator from '../hooks/useFormValidator';
import PopupWithForm from './PopupWithForm';


export default function AddPlacePopup(props) {

  const {
    values,
    errors,
    isElementValid,
    handleElementChange,
    resetFormInputs
  } = useFormValidator({});

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace(values)
  }

  React.useEffect(() => {
    resetFormInputs();
  }, [resetFormInputs, props.isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isDisabled={!isElementValid}
    >
      <input
        type="text"
        placeholder="Название"
        className={errors.name ? "popup__text popup__text_type_error" : "popup__text"}
        name="name"
        id="image-input"
        required
        minLength="2"
        maxLength="30"
        value={values.name || ""}
        onChange={handleElementChange}
      />

      <span className={errors.name ? "popup__text-error popup__text-error_visible" : "popup__text-error"}>
        {errors.name}
      </span>

      <input
        type="url"
        placeholder="Ссылка на картинку"
        className={errors.link ? "popup__text popup__text_type_error" : "popup__text"}
        id="link-input"
        name="link"
        required
        value={values.link || ""}
        onChange={handleElementChange}
      />

      <span className={errors.link ? "popup__text-error popup__text-error_visible" : "popup__text-error"}>
        {errors.link}
      </span>
    </PopupWithForm>
  )
}