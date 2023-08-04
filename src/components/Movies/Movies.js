import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import movies from "../../utils/movies";
import Footer from "../Footer/Footer";

export default function Movies() {
  return (
    <main className="main">
      <section className="movies">
        <Header />
        <SearchForm />
        <MoviesCardList movies={movies} />
        <Footer />
      </section>
    </main>
  );
}
