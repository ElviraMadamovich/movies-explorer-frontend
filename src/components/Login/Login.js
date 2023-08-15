import Authorization from "../Authorization/Authorization";
import { useValidation } from "../../hooks/useValidation";
import { Link } from 'react-router-dom';
import logo from '../../images/logo-green.svg';

function Login({ onLogin }) {
  const { values, handleUpdate, resetForm, errors, isValid } = useValidation()

  function submitAuthorization(e, setLoadingImage) {
    e.preventDefault();
    onLogin(values, resetForm, setLoadingImage);
  }

  return (
    <main className="main">

      <section className="authorization">
        <div className="authorization__content">
          <Link to='/' className='authorization__logo'>
            <img className='authorization__logo-svg' src={logo} alt="Логотип" />
          </Link>
          <h2 className='authorization__title'>
            Рады видеть!
          </h2>
          <Authorization isValid={!isValid} name={'log-in'} onSubmit={submitAuthorization} buttonText="Войти">
            <fieldset className="authorization__data">
              <label className="authorization__line">E-mail</label>
              <input
                id="emailInput"
                className={errors.emailInput ? "authorization__input authorization__input_type_error" : "authorization__input"}
                type="email"
                name="emailInput"
                placeholder="E-mail"
                minLength="2"
                maxLength="40"
                required
                value={values.emailInput || ''}
                onChange={handleUpdate}
                autoComplete="email" />

              <span
                id="emailInput-error"
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
                autoComplete="off" />

              <span id="name-password-error"
                className="authorization__error">{errors.password}</span>
            </fieldset>
          </Authorization>
        </div>
        <div className='authorization__reg-container'>
          <p className='authorization__question'>
            Еще не зарегистрированы?
          </p>
          <Link to='/signup' className='authorization__registration'>
            Регистрация
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Login;