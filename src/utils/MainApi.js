import { baseUrl } from "./authUrl";
import checkResponse from './functions/checkResponse';

export const addMovie = (data, token) => {
  return fetch(`${baseUrl}/movies`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `https://api.nomoreparties.co${data.image.url}`,
      trailerLink: data.trailerLink,
      thumbnail: `${baseUrl}${data.image.formats.thumbnail.url}`,
      movieId: `${data.id}`,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    }),
  }).then((res) => {
    return checkResponse(res)
  })
};

export const getLikedMovies = (token) => {
  return fetch(`${baseUrl}/movies`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return checkResponse(res)
  })
};

export const deleteMovie = (movieId, token) => {
  return fetch(`${baseUrl}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return checkResponse(res)
  })
};
