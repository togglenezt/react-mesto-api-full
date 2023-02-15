import React from 'react';

export default function useFormValidator() {

  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isElementValid, setElementValid] = React.useState(false);

  function handleElementChange(e) {
    const target = e.target;
    const name = e.target.name;
    const value = e.target.value;
    
    setValues({
      ...values,
      [name]: value,
    })

    setErrors({
      ...errors,
      [name]: target.validationMessage,
    })

    setElementValid(target.closest('.form').checkValidity());
  }

  const resetFormInputs = React.useCallback(
    (blankValues = {}, blankErrors = {}, defaultValidState = false) => {
      setValues(blankValues);
      setErrors(blankErrors);
      setElementValid(defaultValidState);
    }, [setValues, setErrors, setElementValid]);

  return {
    values,
    errors,
    isElementValid,
    handleElementChange,
    resetFormInputs
  };
}
