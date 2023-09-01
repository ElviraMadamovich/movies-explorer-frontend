import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
import { useValidation } from "../../hooks/useValidation";
import headerLogo from "../../images/logo.svg";

export default function Login({
  login,
  errorMessage,
  setErrorMessage,
  isActiveSubmitButton,
}) {

  const { values, handleUpdate, errors, isValid, reset } = useValidation();

  function submit(e) {
    e.preventDefault();
    login({
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
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__data" onSubmit={submit}>

          <label className="login__line">E-mail</label>
          <input
            className={errors.emailInput ? "login__input login__input_type_error" : "login__input"}
            type="email"
            placeholder="E-mail"
            name="email"
            id="email"
            value={values.email || ""}
            onChange={handleUpdate}
            required
          />
          <span className="login__error">{errors.email}</span>

          <label className="login__line">Пароль</label>
          <input
            className={errors.emailInput ? "login__input login__input_type_error" : "login__input"}
            type="password"
            placeholder="Пароль"
            name="password"
            id="password"
            value={values.password || ""}
            onChange={handleUpdate}
            required
          />
          <span className="login__error">{errors.password}</span>

          <span className="login__server-error">{errorMessage}</span>

          <button
            className={
              !isValid
                ? "login__button login__button_inactive"
                : "login__button"
            }
            type="submit"
            disabled={!isValid || !isActiveSubmitButton}
          >
            Войти
          </button>
          <div className='login__reg-container'>
            <p className="login__question">
              Ещё не зарегистрированы?
            </p>
            <Link className="login__link" to="/signup">
              Регистрация
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
