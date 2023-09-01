import "./MoviesCardList.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import Notification from "../Notification/Notification";
import { useDisplayAdjustion } from "../../hooks/useDisplayAdjustion";
import { url } from "../../utils/constants";

export default function MoviesCardList({
  movies,
  isLoading,
  isNotFound,
  isSearchError,
  onLike,
  savedMovies,
  handleDelete,
  onMovieDelete,
  isLikedMovieNotFound,
}) {

  const { showMovies, showMoreMovies, seenMovies } = useDisplayAdjustion();
  const location = useLocation();
  const moviesPath = location.pathname === "/movies";
  const savedMoviesPath = location.pathname === "/saved-movies";

  useEffect(() => {
    showMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", showMovies);
    }, 500);
  });

  return (
    <section
      className={`${movies.length < seenMovies
        ? "movies-card-list movies-card-list__gap"
        : "movies-card-list"
        }`}>
      <>
        {moviesPath && (
          <>
            {isLoading && <Preloader />}
            {isNotFound && !isLoading && (
              <Notification
                errorText={"Поиск не дал результатов"} />
            )}
            {isSearchError && !isLoading && !isNotFound && (
              <Notification
                errorText={
                  "Что-то пошло не так! Попробуйте ещё раз"
                }
              />
            )}

            {!isSearchError && !isLoading && (
              <ul className="movies-card-list__container">
                {movies.slice(0, seenMovies).map((movie, id) => {
                  return (
                    <li key={id}>
                      <MoviesCard
                        title={movie.nameRU || movie.nameEN}
                        duration={movie.duration}
                        link={`${url}${movie.image.url}` || movie.image}
                        isLiked={movie.isLiked}
                        trailerLink={movie.trailerLink}
                        onLike={() => onLike(movie)}
                        movie={movie}
                        savedMovies={savedMovies}
                        onMovieDelete={onMovieDelete}
                        handleDelete={handleDelete}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
            {seenMovies < movies?.length && moviesPath ?
              <button onClick={showMoreMovies} type='button' className={`${movies.length > seenMovies
                ? "movies-card-list__button"
                : "movies-card-list__button movies-card-list__button_inactive"
                }`}>
                Ещё
              </button>
              : null
            }
          </>

        )}
        {savedMoviesPath && (
          <>
            {isLoading && <Preloader />}
            {isLikedMovieNotFound && !isLoading && (
              <Notification
                errorText={"Поиск не дал результатов"} />
            )}

            {!isLoading && !isLikedMovieNotFound && (
              <ul className="movies-card-list__container">
                {movies.map((movie, _id) => {
                  return (
                    <li key={_id}>
                      <MoviesCard
                        movie={movie}
                        title={movie.nameRU}
                        trailerLink={movie.trailerLink}
                        link={movie.image}
                        duration={movie.duration}
                        isLiked={movie.isLiked}
                        savedMovies={savedMovies}
                        handleDelete={handleDelete}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
      </>
    </section>
  );
}
