import "./MoviesCard.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ title, duration, link }) {
  const [isCardLiked, setIsCardLiked] = useState(false);
  const location = useLocation();

  const likeButton = (
    `movies-card__like movies-card__like${!isCardLiked ? "_inactive" : "_active"
    }`
  );

  const handleOnClick = () => {
    setIsCardLiked(!isCardLiked);
  };

  return (
    <li className="movies-card">
      <img src={link} alt={title} className="movies-card__image" />
      <div className="movies-card__element">
        <h3 className="movies-card__title">{title}</h3>
        {location.pathname === "/movies" ? (
          <button
            type="button"
            className={likeButton}
            onClick={handleOnClick}
          ></button>
        ) : (
          <button
            type="button"
            className="movies-card__dislike"
          ></button>
        )}
      </div>
      <div className="movies-card__time">{duration}</div>
    </li>
  );
}
