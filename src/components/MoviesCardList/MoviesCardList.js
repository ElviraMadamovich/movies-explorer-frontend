import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies }) {
  return (
    <section
      className={`${
        movies.length < 5
          ? "list list__button"
          : "list"
      }`}
    >
      <ul className="list__container">
        {movies.map((card, id) => {
          return (
              <MoviesCard
                title={card.title}
                duration={card.duration}
                link={card.link}
                isLiked={card.isLiked}
              />
          );
        })}
      </ul>
      <button
        className={`${
          movies.length > 3
            ? "list__button"
            : "list__button-inactive"
        }`}
      >
        Ещё
      </button>
    </section>
  );
}
