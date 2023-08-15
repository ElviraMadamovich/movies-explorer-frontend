import "./Register.css";
import { Link } from 'react-router-dom';
import Authorization from "../Authorization/Authorization";
import { useValidation } from "../../hooks/useValidation";
import logo from '../../images/logo-green.svg';

function Register({ onRegister }) {
  const { values, resetForm, handleUpdate, errors, isValid } = useValidation();

  function submitAuthorization(e, setLoadingImage) {
    e.preventDefault();
    onRegister(values, resetForm, setLoadingImage)
  }

  return (
    <main className="main">

      <section className="authorization">
        <div className="authorization__content">
          <Link to="/" className="authorization__logo">
            <img src={logo} alt="Логотип" />
          </Link>
          <h2 className="authorization__title">Добро пожаловать!</h2>
          <Authorization isValid={!isValid} name={'register'} onSubmit={submitAuthorization} buttonText="Зарегистрироваться">
            <fieldset className="authorization__data">
              <label className="authorization__line">Имя</label>
              <input
                id="nameInput"
                className={errors.nameInput ? "authorization__input authorization__input_type_error" : "authorization__input"}
                type="text"
                name="nameInput"
                required
                minLength="2"
                maxLength="40"
                placeholder="Имя"
                value={values.nameInput || ''}
                onChange={handleUpdate}
                autoComplete="name" />

              <span
                id="emailInput-error"
                className="authorization__error">{errors.nameInput}</span>

              <label className="authorization__line">E-mail</label>
              <input
                id="emailInput"
                className={errors.emailInput ? "authorization__input authorization__input_type_error" : "authorization__input"}
                type="email"
                name="emailInput"
                required
                minLength="2"
                maxLength="40"
                placeholder="E-mail"
                value={values.emailInput || ''}
                onChange={handleUpdate}
                autoComplete="email" />

              <span
                id="email-error"
                className="authorization__error">{errors.emailInput}</span>

              <label className="authorization__line">Пароль</label>
              <input
                id="password-input"
                className={errors.password ? "authorization__input authorization__input_type_error" : "authorization__input"}
                type="password"
                name="password"
                required
                minLength="2"
                maxLength="200"
                placeholder="Пароль"
                value={values.password || ''}
                onChange={handleUpdate}
                autoComplete="new-password" />

              <span id="name-password-error"
                className="authorization__error">{errors.password}</span>

            </fieldset>
          </Authorization>
        </div>
        <div className='authorization__reg-container'>
          <p className='authorization__question'>
            Уже зарегистрированы?
          </p>
          <Link to='/signin' className='authorization__registration'>
            Войти
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Register;