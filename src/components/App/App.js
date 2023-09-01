import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import * as auth from "../../utils/auth";
import { getMovies } from "../../utils/MoviesApi";
import { addMovie, deleteMovie, getLikedMovies } from "../../utils/MainApi";
import { Shortfilm_time, HTTP_STATUS_CONFLICT_ERROR } from "../../utils/constants";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isAllMovies, setIsAllMovies] = useState([]);
  const [movies, setmovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedResult, setSavedResult] = useState([]);
  const [isActiveSubmitButton, setIsActiveSubmitButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);
  const [isLikedMovieNotFound, setIsLikedMovieNotFound] = useState(false);

  const [moviesValue, setMoviesValue] = useState(JSON.parse(localStorage.getItem("moviesValue")) || "");
  const [moviesValueSaved, setMoviesValueSaved] = useState("");
  const [shortfilmDuration, setShortfilmDuration] = useState(JSON.parse(localStorage.getItem("shortfilmDuration")) || false);
  const [shortfilmDurationSM, setShortfilmDurationSM] = useState(false);

  useEffect(() => {
    getAllMovies();
  }, []);

  function getAllMovies() {
    setIsLoading(true);
    return getMovies()
      .then((res) => {
        setIsAllMovies(res);
        localStorage.setItem("allMovies", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
        setIsSearchError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSearch(moviesValue, shortfilmDuration) {
    localStorage.setItem("shortfilmDuration", JSON.stringify(shortfilmDuration));
    localStorage.setItem("moviesValue", JSON.stringify(moviesValue));
    const moviesFilter = isAllMovies.filter((movie) => {
      const movieRu = String(movie.nameRU)
        .toLowerCase()
        .trim()
        .includes(moviesValue.toLowerCase());
      const movieEn = String(movie.nameEN)
        .toLowerCase()
        .trim()
        .includes(moviesValue.toLowerCase());
      const isShort = movie.duration <= Shortfilm_time;
      if (moviesValue === "") {
        return 0;
      }
      if (shortfilmDuration) {
        return (movieRu || movieEn) && isShort;
      } else {
        return movieRu || movieEn;
      }
    });

    if (moviesFilter.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
    localStorage.setItem("moviesFilter", JSON.stringify(moviesFilter));
    setmovies(moviesFilter);
    getSavedMovies();
  }

  function saveNewMovie(movie) {
    const token = localStorage.getItem("token");
    addMovie(movie, token)
      .then((newMovie) => {
        const newSavedMovies = [...savedMovies, newMovie];
        setSavedMovies(newSavedMovies);
        setSavedResult(newSavedMovies);
        localStorage.setItem("savedMovie", JSON.stringify(newSavedMovies));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getSavedMovies() {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    return getLikedMovies(token)
      .then((res) => {
        setSavedMovies(res);
        localStorage.setItem("savedMovie", JSON.stringify(res));
        setSavedResult(res);
      })
      .catch((err) => {
        console.log(err);
        setIsSearchError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSearchSavedMovies(moviesValueSaved, shortfilmDurationSM) {
    const moviesFilter = savedMovies.filter((movie) => {
      const movieRu = String(movie.nameRU)
        .toLowerCase()
        .trim()
        .includes(moviesValueSaved.toLowerCase());
      const movieEn = String(movie.nameEN)
        .toLowerCase()
        .trim()
        .includes(moviesValueSaved.toLowerCase());
      const isMovieShort = movie.duration <= Shortfilm_time;
      if (shortfilmDurationSM) {
        return (movieRu || movieEn) && isMovieShort;
      } else {
        return movieRu || movieEn;
      }
    });
    if (moviesFilter.length === 0) {
      setIsLikedMovieNotFound(true);
    } else {
      setIsLikedMovieNotFound(false);
    }
    localStorage.setItem(
      "moviesFilterSavedMovies",
      JSON.stringify(moviesFilter)
    );
    setSavedResult(moviesFilter);
  }

  function handleDelete(movie) {
    const token = localStorage.getItem("token");
    return deleteMovie(movie._id, token)
      .then(() => {
        const newMoviesList = savedMovies.filter((res) => {
          if (movie.id === res.movieId || movie.movieId === res.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedResult(newMoviesList);
        setSavedMovies(newMoviesList);
        localStorage.setItem("savedMovie", JSON.stringify(newMoviesList));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onMovieDelete(movie) {
    const token = localStorage.getItem("token");
    const removeMovie = savedMovies.find((item) => movie.id === item.movieId);
    return deleteMovie(removeMovie._id, token)
      .then(() => {
        const newMoviesList = savedMovies.filter((res) => {
          if (movie.id === res.movieId || movie.movieId === res.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMovies(newMoviesList);
        setSavedResult(newMoviesList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function changeUserDetails({ name, email }) {
    const token = localStorage.getItem("token");
    auth.checkToken(name, email, token)
      .then((data) => {
        setLoggedIn(true);
        setCurrentUser(data);
        setErrorMessage("Данные изменены");
      })
      .catch((err) => {
        if (err === HTTP_STATUS_CONFLICT_ERROR) {
          setErrorMessage("Пользователь уже зарегистрирован");
        } else {
          setErrorMessage("Ошибка регистрации");
        }
      });
  }

  function logOut() {
    navigate("/");
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    setMoviesValue("");
    setIsNotFound(false);
    setIsSearchError(false);
    setShortfilmDuration(false);
    setmovies([]);
  }

  useEffect(() => {
    setErrorMessage("");
  }, [location]);

  const login = ({ email, password }) => {
    setIsActiveSubmitButton(false);
    auth.authorize(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setLoggedIn(true);
        setCurrentUser(data);
        navigate("/movies", { replace: true });
        getSavedMovies();
        setIsActiveSubmitButton(true);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setErrorMessage("Неверный логин или пароль");
        setIsActiveSubmitButton(true);
      });
  };

  const createNewUser = ({ name, email, password }) => {
    auth.register(name, email, password)
      .then((res) => {
        setCurrentUser(res);
        login({ email, password });
      })
      .catch((err) => {
        if (err === HTTP_STATUS_CONFLICT_ERROR) {
          setErrorMessage("Пользователь уже зарегистрирован");
        } else {
          setErrorMessage("Ошибка регистрации");
          console.log(err);
        }
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth.checkToken(token)
        .then((user) => {
          if (user) {
            setCurrentUser(user);
            setLoggedIn(true);
            navigate(location);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem("token");
      auth.checkToken(token)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (
      (!loggedIn && path === "/movies") ||
      path === "/saved-movies" ||
      path === "/profile" ||
      path === "/signup" ||
      path === "/signin"
    ) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header loggedIn={loggedIn} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Register
                  createNewUser={createNewUser}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Login
                  isActiveSubmitButton={isActiveSubmitButton}
                  login={login}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <ProtectedRoute
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                  changeUserDetails={changeUserDetails}
                  loggedIn={loggedIn}
                  element={Profile}
                  logOut={logOut}
                />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                savedMovies={savedMovies}
                element={Movies}
                loggedIn={loggedIn}
                onLike={saveNewMovie}
                onMovieDelete={onMovieDelete}
                getSavedMovies={getSavedMovies}
                handleSearch={handleSearch}
                moviesValue={moviesValue}
                setMoviesValue={setMoviesValue}
                shortfilmDuration={shortfilmDuration}
                setShortfilmDuration={setShortfilmDuration}
                movies={movies}
                isLoading={isLoading}
                isNotFound={isNotFound}
                isSearchError={isSearchError}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                savedResult={savedResult}
                handleSearch={handleSearchSavedMovies}
                element={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                handleDelete={handleDelete}
                moviesValueSaved={moviesValueSaved}
                setMoviesValueSaved={setMoviesValueSaved}
                shortfilmDurationSM={shortfilmDurationSM}
                setShortfilmDurationSM={setShortfilmDurationSM}
                isLoading={isLoading}
                isLikedMovieNotFound={isLikedMovieNotFound}
                setIsLikedMovieNotFound={setIsLikedMovieNotFound}
                isSearchError={isSearchError}
                getSavedMovies={getSavedMovies}
                setErrorMessage={setErrorMessage}
              />
            }
          />
          <Route
            path="*"
            element={
              <>
                <NotFound />
              </>
            }
          />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
