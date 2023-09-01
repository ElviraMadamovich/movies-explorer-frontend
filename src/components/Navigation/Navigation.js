import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import account from "../../images/account-icon.svg";
import close from "../../images/close-nav.svg";

function Navigation({ isActive, handleClose }) {

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link_active" : "navigation__link"
            }`
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link_active" : "navigation__link"
            }`
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link_active" : "navigation__link"
            }`
          }
        >
          Сохранённые фильмы
        </NavLink>
        <div className="navigation__button-container">
          <Link to="/profile" className="navigation__account">
            Аккаунт
          </Link>
          <Link to="/profile" className="navigation__account-button">
            <img src={account} alt="аккаунт" />
          </Link>
        </div>
      </div>
      <button className="navigation__close" onClick={handleClose}>
        <img src={close} alt="закрыть" />
      </button>
    </nav>
  );
}

export default Navigation;
