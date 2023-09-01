import React from "react";
import isEmail from "validator/es/lib/isEmail";

export function useValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleUpdate = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === "name" && target.validity.patternMismatch) {
      target.setCustomValidity(
        "Допустимы только латинские и кириллические символы, пробел, дефис."
      );
    } else {
      target.setCustomValidity("");
    }

    if (name === "email") {
      if (!isEmail(value)) {
        target.setCustomValidity("Некорректный адрес");
      } else {
        target.setCustomValidity("");
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const reset = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleUpdate, errors, isValid, reset };
}
