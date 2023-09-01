import checkResponse from "./functions/checkResponse";

const config = {
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
};

class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  getBeatFilms() {
    return fetch(this.url, {
      headers: this.headers,
    }).then((res) => {
      return checkResponse(res)
    })
  }
}

const MovieApi = new Api(config);

export const getMovies = MovieApi.getBeatFilms.bind(MovieApi);
