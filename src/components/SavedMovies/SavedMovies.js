import "./SavedMovies.css";
import React, { useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function SavedMovies({
  savedMovies,
  handleDelete,
  handleSearch,
  savedResult,
  isShort,
  isLoading,
  isLikedMovieNotFound,
  isSearchError,
  shortfilmDurationSM,
  setShortfilmDurationSM,
  getSavedMovies,
  setIsLikedMovieNotFound,
  moviesValueSaved,
  setMoviesValueSaved,
}) {

  useEffect(() => {
    getSavedMovies();
    setMoviesValueSaved("");
    setShortfilmDurationSM(false);
    setIsLikedMovieNotFound(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <section className="movies">
        <SearchForm
          onMoviesSearch={handleSearch}
          value={moviesValueSaved}
          setValue={setMoviesValueSaved}
          checkBox={isShort}
          isChecked={shortfilmDurationSM}
          setIsChecked={setShortfilmDurationSM}
        />
        <MoviesCardList
          movies={savedResult}
          savedMovies={savedMovies}
          handleDelete={handleDelete}
          isLoading={isLoading}
          isLikedMovieNotFound={isLikedMovieNotFound}
          isSearchError={isSearchError}
        />
      </section>
      <Footer />
    </>
  );
}
