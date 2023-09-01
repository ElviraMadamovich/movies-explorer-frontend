import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function Movies({
  movies,
  onLike,
  savedMovies,
  onMovieDelete,
  isSearchError,
  handleSearch,
  moviesValue,
  setMoviesValue,
  shortfilmDuration,
  setShortfilmDuration,
  isLoading,
  isNotFound,
}) {

  return (
    <>
      <Header />
      <section className="movies">
        <SearchForm
          setValue={setMoviesValue}
          onMoviesSearch={handleSearch}
          value={moviesValue}
          isChecked={shortfilmDuration}
          setIsChecked={setShortfilmDuration}
        />
        <MoviesCardList
          movies={JSON.parse(localStorage.getItem("moviesFilter")) || movies}
          isLoading={isLoading}
          isNotFound={isNotFound}
          isSearchError={isSearchError}
          onLike={onLike}
          savedMovies={savedMovies}
          onMovieDelete={onMovieDelete}
        />
      </section>
      <Footer />
    </>
  );
}
