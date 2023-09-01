import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import search from "../../images/search.svg";
import confirm from "../../images/find.svg";

function SearchForm({
  onMoviesSearch,
  value,
  setValue,
  isChecked,
  setIsChecked }) {
  const [emptyField, setEmptyField] = useState(false);

  const location = useLocation();
  const savedMoviesPath = location.pathname === "/saved-movies";

  const submit = (checked) => {
    if (savedMoviesPath) {
      onMoviesSearch(value, checked);
    } else {
      if (value < 1) {
        setEmptyField(true);
        onMoviesSearch(value, checked);
      } else {
        setEmptyField(false);
        onMoviesSearch(value, checked);
      }
    }
  };

  const submitSearch = (e) => {
    e.preventDefault();
    submit(isChecked);
  };

  const toggleCheckbox = (e) => {
    setIsChecked(e.target.checked);
    submit(e.target.checked);
  };

  function change(e) {
    setValue(e.target.value);
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={submitSearch}>
          <div className="search__field">
            <div className="search__initiate">
              <img className="search__image" src={search} alt="поиск" />
              <input
                placeholder="Фильм"
                className="search__input"
                onChange={change}
                name="search"
                type="text"
                value={value}
              >
              </input>
              {emptyField && (
                <span className="search__form-error">
                  Нужно ввести ключевое слово
                </span>
              )}
            </div>
            <button className="search__button" type="submit">
              <img src={confirm} alt="искать" />
            </button>
          </div>
          <div className="search__switch">
            <input
              className="search__toggle"
              type="checkbox"
              id="toggle-button"
              onChange={toggleCheckbox}
              checked={isChecked}
            />
            <label className="search__shortfilms">Короткометражки</label>
          </div>
        </form>
      </div>
    </section>
  );
}
export default SearchForm;
