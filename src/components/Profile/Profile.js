import "./Profile.css";
import { useEffect, useContext } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useValidation } from "../../hooks/useValidation";

function Profile({ isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleUpdate, setValues, resetForm } = useValidation();

  useEffect(() => {
    if (currentUser) {
      resetForm();
      setValues({
        name: currentUser.name,
        about: currentUser.about
      });
    }
  }, [resetForm, currentUser, setValues]);

  return (
    <main className="main">
      <section className="profile">
        <ProfileForm
          name="Виталий"
          onSubmit={handleUpdate}
          resetForm={resetForm}
          isDisabled={!isValid}
          buttonDescription={isLoading ? 'Редактируем...' : 'Редактировать'}
        >
          <div className="profile__inputs">
            <label className="profile__line">Имя</label>
            <input
              id="nameInput"
              className={errors.nameInput ? "profile__input profile__input_type_error" : "profile__input"}
              type="text"
              name="nameInput"
              required
              minLength="2"
              maxLength="40"
              placeholder="Имя"
              value={values.nameInput || ''}
              onChange={handleUpdate}
              autoComplete="name" />
          </div>

          <span
            id="email-error"
            className="profile__error">{errors.nameInput}</span>

          <div className="profile__inputs">
            <label className="profile__line">E-mail</label>
            <input
              id="emailInput"
              className={errors.emailInput ? "profile__input profile__input_type_error" : "profile__input"}
              type="email"
              name="emailInput"
              required
              minLength="2"
              maxLength="40"
              placeholder="E-mail"
              value={values.emailInput || ''}
              onChange={handleUpdate}
              autoComplete="off" />
          </div>
          <span
            id="emailInput-error"
            className="profile__error">{errors.emailInput}</span>
        </ProfileForm>
      </section>
    </main>
  );
}

export default Profile;
