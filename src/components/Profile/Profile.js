import "./Profile.css";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { useValidation } from "../../hooks/useValidation";

function Profile({ logOut, changeUserDetails, errorMessage, setErrorMessage, isLoading }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleUpdate, errors, isValid, reset } = useValidation();
  const checkValidity = !isValid || (currentUser.name === values.name && currentUser.email === values.email);

  function submit(e) {
    e.preventDefault();
    e.preventDefault();
    changeUserDetails({
      name: values.name,
      email: values.email,
    });
    setErrorMessage("");
  }

  React.useEffect(() => {
    if (currentUser) {
      reset(currentUser, {}, true);
    }
  }, [currentUser, reset]);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__content">
          <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
          <form
            className="profile__form"
            id="profile"
            name="profile"
            isDisabled={!isValid}
            onSubmit={submit}>

            <div className="profile__inputs">
              <label className="profile__line">
                Имя
              </label>
              <input
                className={errors.name ? "profile__input profile__input_type_error" : "profile__input"}
                type="name"
                name="name"
                id="name"
                value={values.name || ""}
                onChange={handleUpdate}
                required
                pattern="[a-zA-ZА-яёЁ\-\s]*"
                minLength="2"
                maxLength="30"
              />
            </div>
            <span className="profile__error">{errors.name}</span>

            <div className="profile__inputs">
              <label className="profile__line">
                E-mail
              </label>
              <input
                className={errors.email ? "profile__input profile__input_type_error" : "profile__input"}
                type="email"
                name="email"
                id="email"
                value={values.email || ""}
                onChange={handleUpdate}
                minLength="2"
                maxLength="40"
                required
              />
            </div>
            <span className="profile__error">{errors.email}</span>

            <span className="profile__error-server">{errorMessage}</span>

            <button
              className={
                checkValidity
                  ? "profile__button profile__button_disabled"
                  : "profile__button"
              }
              type="submit"
              form="profile"
              buttonDescription={isLoading ? 'Редактируем...' : 'Редактировать'}
              disabled={checkValidity ? true : false}
            >
              Редактировать
            </button>

            <button
              className="profile__link"
              onClick={logOut}
              type="button"
            >
              Выйти из аккаунта
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Profile;
