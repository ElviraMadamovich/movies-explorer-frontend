import React from "react";
import "./SearchForm.css";
import search from "../../images/search.svg";
import submit from "../../images/find.svg";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <div className="search__field">
            <div className="search__initiate">
              <img className="search__image" src={search} alt="поиск" />
              <input placeholder="Фильм" className="search__input"></input>
            </div>
            <button className="search__button" type="submit">
              <img src={submit} alt="искать" />
            </button>
          </div>
          <div className="search__switch">
            <input
              className="search__toggle"
              type="checkbox"
              id="toggle-button"
            />
            <label className="search__shortfilms">Короткометражки</label>
          </div>
        </form>
      </div>
    </section>
  );
}
export default SearchForm;
