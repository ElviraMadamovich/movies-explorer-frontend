import "./Profile.css";
import { useEffect, useContext } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useValidation } from "../../hooks/useValidation";
import Header from "../Header/Header";

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
    <section className="profile">
      <Header />
      <ProfileForm
        name="Виталий"
        onSubmit={handleUpdate}
        resetForm={resetForm}
        isDisabled={!isValid}
        buttonDescription={isLoading ? 'Редактируем...' : 'Редактировать'}
      >
        <label className="profile__line">Имя</label>
        <input
          id="nameInput"
          className={errors.nameInput ? "profile__input profile__input_type_error" : "profile__input"}
          type="name"
          name="nameInput"
          required
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          value={values.nameInput || ''}
          onChange={handleUpdate}
          autoComplete="new-name" />

        <span
          id="emailInput-error"
          className="profile__error">{errors.nameInput}</span>

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
          autoComplete="new-email" />

        <span
          id="emailInput-error"
          className="profile__error">{errors.emailInput}</span>
      </ProfileForm>
    </section >
  );
}

export default Profile;
