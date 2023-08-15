import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Package from "../Package/Package";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Package>
                <Main />
              </Package>
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <Package>
              <Movies />
            </Package>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <Package>
              <SavedMovies />
            </Package>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <Login />
            </>
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
        <Route
          path="/profile"
          element={
            <Package>
              <Profile />
            </Package>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
