import "./MoviesCard.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { hour } from "../../utils/constants";

export default function MoviesCard({
  movie,
  title,
  trailerLink,
  link,
  duration,
  onLike,
  savedMovies,
  handleDelete,
  onMovieDelete,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();

  const likeButton = (
    `movies-card__like movies-card__like_${!isLiked ? "inactive" : "active"
    }`
  );

  useEffect(() => {
    const isSavedMovie = location.pathname === "/saved-movies";
    if (!isSavedMovie) {
      const result = savedMovies.some((item) => movie.id === item.movieId);
      setIsLiked(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies]);


  function showFilmDuration(duration) {
    const hours = Math.floor(duration / hour);
    const minutes = duration % hour;
    if (hours === 0) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  }

  const handleClick = () => {
    if (!isLiked) {
      onLike(movie);
      setIsLiked(isLiked);
    } else {
      onMovieDelete(movie);
      setIsLiked(isLiked);
    }
  };

  const onDeleteClick = () => {
    handleDelete(movie);
  };

  return (
    <div className="movies-card">
      <a
        className="movies-card__trailer"
        target="_blank"
        rel="noreferrer"
        href={trailerLink}
      >
        <img src={link} alt={title} className="movies-card__image" />
      </a>
      <div className="movies-card__element">
        <h3 className="movies-card__title">{title}</h3>
        {location.pathname === "/movies" ? (
          <button
            type="button"
            className={likeButton}
            onClick={handleClick}
          ></button>
        ) : (
          <button
            type="button"
            className="movies-card__dislike"
            onClick={onDeleteClick}
          ></button>
        )}
      </div>
      <div className="movies-card__time">{showFilmDuration(duration)}</div>
    </div>
  );
}
