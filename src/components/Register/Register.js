import "../Login/Login.css";
import "./Register.css";
import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.svg";
import { useValidation } from "../../hooks/useValidation";

export default function Register({
  createNewUser,
  errorMessage,
  setErrorMessage,
}) {

  const { values, handleUpdate, errors, isValid, reset } = useValidation();

  function submit(e) {
    e.preventDefault();
    createNewUser({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    setErrorMessage("");
  }

  React.useEffect(() => {
    reset();
  }, [reset]);

  return (
    <section className="login">
      <div className="login__content">
        <Link to="/" className="login__logo">
          <img src={headerLogo} alt="Логотип" />
        </Link>
        <h2 className="login__title">Добро пожаловать!</h2>
        <form
          className="login__data"
          onSubmit={submit}>

          <label className="login__line">Имя</label>
          <input
            id="name"
            className={errors.name ? "login__input login__input_type_error" : "login__input"}
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="40"
            placeholder="Имя"
            value={values.name || ''}
            onChange={handleUpdate}
            autoComplete="off" />
          <span
            id="emailInput-error"
            className="login__error">{errors.name}</span>

          <label className="login__line">E-mail</label>
          <input
            id="email"
            className={errors.email ? "login__input login__input_type_error" : "login__input"}
            type="email"
            name="email"
            required
            minLength="2"
            maxLength="40"
            placeholder="E-mail"
            value={values.email || ''}
            onChange={handleUpdate}
            autoComplete="off" />
          <span
            id="email-error"
            className="login__error">{errors.email}</span>

          <label className="login__line">Пароль</label>
          <input
            id="password-input"
            className={errors.password ? "login__input login__input_type_error" : "login__input"}
            type="password"
            name="password"
            required
            minLength="2"
            maxLength="200"
            placeholder="Пароль"
            value={values.password || ''}
            onChange={handleUpdate}
            autoComplete="off" />
          <span id="name-password-error" className="login__error">{errors.password}</span>

          <span className="login__server-error">{errorMessage}</span>
          <button
            className={
              !isValid
                ? "register__button register__button_inactive"
                : "register__button"
            }
            type="submit"
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
          <div className='login__reg-container'>
            <p className="login__question">
              Уже зарегистрированы?
            </p>
            <Link className="login__link" to="/signin">
              Войти
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
