import React from "react";
import {
  WINDOW_DESKTOP_L,
  WINDOW_DESKTOP,
  WINDOW_TABLET,
  WINDOW_PHONE,
  WINDOW_PHONE_S
} from "../utils/constants";

export function useDisplayAdjustion() {

  const [seenMovies, setSeenMovies] = React.useState(0);

  function showMovies() {
    const show = window.innerWidth;
    if (show > WINDOW_DESKTOP_L) {
      setSeenMovies(12);
    } else if (show > WINDOW_DESKTOP) {
      setSeenMovies(12);
    } else if (show > WINDOW_TABLET) {
      setSeenMovies(8);
    } else if (show < WINDOW_PHONE) {
      setSeenMovies(5);
    } else if (show < WINDOW_PHONE_S) {
      setSeenMovies(5);
    }
  }

  function showMoreMovies() {
    const show = window.innerWidth;
    if (show > WINDOW_DESKTOP_L) {
      setSeenMovies(seenMovies + 3);
    } else if (show > WINDOW_DESKTOP) {
      setSeenMovies(seenMovies + 3);
    } else if (show > WINDOW_TABLET) {
      setSeenMovies(seenMovies + 2);
    } else if (show < WINDOW_PHONE) {
      setSeenMovies(seenMovies + 1);
    } else if (show < WINDOW_PHONE_S) {
      setSeenMovies(seenMovies + 1);
    }
  }

  return { showMovies, showMoreMovies, seenMovies };
}
