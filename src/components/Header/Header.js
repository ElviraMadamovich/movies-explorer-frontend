import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import account from "../../images/account-icon.svg";
import burger from "../../images/burger.svg";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  const location = useLocation();
  const [isBarOpened, setIsBarOpened] = useState(false);

  function handleClose() {
    setIsBarOpened(false);
  }

  function handleOpen() {
    setIsBarOpened(true);
  }

  return (
    <>
      {location.pathname === "/" && !loggedIn ? (
        <header className="header header_login">
          <div className="header__login-menu">
            <Link to="/" className="header__logo">
              <img src={logo} alt="Логотип" />
            </Link>
            <nav className="header__container">
              <Link to="/signup" className="header__register">
                Регистрация
              </Link>

              <Link to="/signin" className="header__button" type="button">
                Войти
              </Link>
            </nav>
          </div>
        </header>
      ) : (
        <header className="header">
          <div className="header__login-menu">
            <Link to="/" className="header__logo">
              <img src={logo} alt="Логотип" />
            </Link>
            <nav className="header__container header__container_inactive">
              <div className="header__menu">
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    `header__navlink ${isActive ? "header__navlink_active" : "header__navlink"
                    }`
                  }
                >
                  Фильмы
                </NavLink>
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) =>
                    `header__navlink ${isActive ? "header__navlink_active" : "header__navlink"
                    }`
                  }
                >
                  Сохранённые фильмы
                </NavLink>
              </div>
              <div className="header__button-container">
                <Link to="/profile" className="header__account-link">
                  Аккаунт
                </Link>
                <Link to="/profile" className="header__account-button">
                  <img src={account} alt="аккаунт" />
                </Link>
              </div>
            </nav>
            <button className="header__menu-button" onClick={handleOpen}>
              <img className="header__menu-pic" src={burger} alt="меню" />
            </button>
            {isBarOpened ? <Navigation handleClose={handleClose} /> : ""}
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
