import Authorization from "../Authorization/Authorization";
import { useValidation } from "../../hooks/useValidation";
import { Link } from 'react-router-dom';
import './Login.css';
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
          <Link to='/' className='login__logo'>
            <img className='login__logo-svg' src={logo} alt="логотип" />
          </Link>
          <h2 className='authorization__title'>
            Рады видеть!
          </h2>
          <Authorization isValid={!isValid} name={'log-in'} onSubmit={submitAuthorization} buttonText="Войти">
            <fieldset className="authorization__data">
              <label className="login__line">E-mail</label>
              <input
                id="emailInput"
                className={errors.emailInput ? "authorization__input authorization__input_type_error" : "authorization__input"}
                type="email"
                name="emailInput"
                placeholder=""
                minLength="2"
                maxLength="40"
                required
                value={values.emailInput || ''}
                onChange={handleUpdate}
                autoComplete="new-email" />

              <span
                id="emailInput-error"
                className="authorization__error">{errors.emailInput}</span>

              <label className="login__line">Пароль</label>
              <input
                id="passwordInput"
                className={errors.passwordInput ? "authorization__input authorization__input_type_error" : "authorization__input"}
                type="passwordInput"
                name="passwordInput"
                placeholder=""
                minLength="2"
                maxLength="200"
                required
                value={values.passwordInput || ''}
                onChange={handleUpdate}
                autoComplete="new-password" />

              <span
                id="passwordInput-error"
                className="authorization__error">{errors.password}</span>
            </fieldset>
          </Authorization>
        </div>
        <div className='login__reg-container'>
          <p className='authorization__question'>
            Еще не зарегистрированы?
          </p>
          <Link to='/movies' className='login__registration'>
            Регистрация
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Login;