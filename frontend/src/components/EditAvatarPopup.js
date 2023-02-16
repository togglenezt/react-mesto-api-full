import React from 'react';
import PopupWithForm from './PopupWithForm';
import useFormValidator from '../hooks/useFormValidator';


export default function EditAvatarPopup(props) {

  const {
    values,
    errors,
    isElementValid,
    handleElementChange,
    resetFormInputs
  } = useFormValidator({});

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar(values)
  }

  React.useEffect(() => {
      resetFormInputs();
  }, [resetFormInputs, props.isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isDisabled={!isElementValid}
    >
        <input
        type="url"
        placeholder="Ссылка на аватарку"
        className={errors.avatar ? "popup__text popup__text_type_error" : "popup__text"}
        id="avatar-input"
        name="avatar"
        value={values.avatar || ""}
        onChange={handleElementChange}
        required
        />

        <span className={errors.avatar ? "popup__text-error popup__text-error_visible" : "popup__text-error"}>
          {errors.avatar}
        </span>
    </PopupWithForm>
  )
}