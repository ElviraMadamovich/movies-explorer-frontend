import "./MoviesCard.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ title, duration, link }) {
  const [isCardLiked, setIsCardLiked] = useState(false);
  const location = useLocation();

  const handleOnClick = () => {
    setIsCardLiked(!isCardLiked);
  };

  return (
    <li className="card">
      <img src={link} alt={title} className="card__image" />
      <div className="card__element">
        <h3 className="card__title">{title}</h3>
        {location.pathname === "/movies" ? (
          <button
            type="button"
            className={`card__like_${!isCardLiked ? "inactive" : "active"
              }`}
            onClick={handleOnClick}
          ></button>
        ) : (
          <button
            type="button"
            className="card__dislike"
          ></button>
        )}
      </div>
      <div className="card__time">{duration}</div>
    </li>
  );
}
