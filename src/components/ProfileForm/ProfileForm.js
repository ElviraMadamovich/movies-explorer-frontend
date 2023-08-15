import React from "react";
import { Link } from "react-router-dom";
import "./ProfileForm.css";

function ProfileForm({
  name,
  children,
  buttonDescription,
  onSubmit,
  isDisabled
}) {

  return (
      <div className="profile__content">
        <h2 className="profile__title">Привет, {`${name}`}! </h2>
        <form name={`${name}`} method="post" target="_parent" action="#" encType="application/x-www-form-urlencoded" onSubmit={onSubmit} className="profile__form">
          {children}
          <button type="submit" disabled={isDisabled} className="profile__button">{buttonDescription}</button>
          <Link className="profile__link" to="/signin">
            Выйти из аккаунта
          </Link>
        </form>
      </div>
  );
}

export default ProfileForm;
