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
          <img className="login__logo" src={logo} alt="Лого" />
          <h2 className="authorization__title">Добро пожаловать!</h2>
          <Authorization isValid={!isValid} name={'register'} onSubmit={submitAuthorization} buttonText="Зарегистрироваться">
            <fieldset className="authorization__data">
              <label className="login__line">Имя</label>
              <input
                id="nameInput"
                className={errors.nameInput ? "authorization__input authorization__input_type_error" : "authorization__input"}
                type="name"
                name="nameInput"
                required
                minLength="2"
                maxLength="40"
                placeholder=""
                value={values.nameInput || ''}
                onChange={handleUpdate}
                autoComplete="new-name" />

              <span
                id="emailInput-error"
                className="authorization__error">{errors.nameInput}</span>

              <label className="login__line">E-mail</label>
              <input
                id="emailInput"
                className={errors.emailInput ? "authorization__input authorization__input_type_error" : "authorization__input"}
                type="email"
                name="emailInput"
                required
                minLength="2"
                maxLength="40"
                placeholder=""
                value={values.emailInput || ''}
                onChange={handleUpdate}
                autoComplete="new-email" />

              <span
                id="emailInput-error"
                className="authorization__error">{errors.emailInput}</span>

              <label className="login__line">Пароль</label>
              <input
                id="password-input"
                className={errors.password ? "authorization__input authorization__input_type_error" : "authorization__input"}
                type="password"
                name="password"
                required
                minLength="2"
                maxLength="200"
                placeholder=""
                value={values.password || ''}
                onChange={handleUpdate}
                autoComplete="new-password" />

              <span id="name-password-error"
                className="authorization__error">{errors.password}</span>

            </fieldset>
          </Authorization>
        </div>
        <div className='login__reg-container'>
          <p className='authorization__question'>
            Уже зарегистрированы?
          </p>
          <Link to='/signin' className='login__registration'>
            Войти
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Register;