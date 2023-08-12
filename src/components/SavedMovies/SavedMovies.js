import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import movies from "../../utils/movies";

export default function SavedMovies() {
  return (
    <main className="movies saved-movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  );
}
