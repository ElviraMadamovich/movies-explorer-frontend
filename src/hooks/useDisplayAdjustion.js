import React from "react";
import {
  WINDOW_DESKTOP,
  WINDOW_TABLET,
  WINDOW_PHONE,
} from "../utils/constants";

export function useDisplayAdjustion() {

const [seenMovies, setSeenMovies] = React.useState(0);

function showMovies() {
  const show = window.innerWidth;
  if (show > WINDOW_DESKTOP) {
    setSeenMovies(16);
  } else if (show > WINDOW_TABLET) {
    setSeenMovies(12);
  } else if (show > WINDOW_PHONE) {
    setSeenMovies(8);
  } else if (show < WINDOW_PHONE) {
    setSeenMovies(5);
  }
}

function showMoreMovies() {
  const show = window.innerWidth;
  if (show > WINDOW_DESKTOP) {
    setSeenMovies(seenMovies + 4);
  } else if (show > WINDOW_TABLET) {
    setSeenMovies(seenMovies + 3);
  } else if (show < WINDOW_TABLET) {
    setSeenMovies(seenMovies + 2);
  }
}

return { showMovies, showMoreMovies, seenMovies };
}
