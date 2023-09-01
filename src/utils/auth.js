import { baseUrl} from "./authUrl";
import checkResponse from "./functions/checkResponse";

const request = (url, method, body, token) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  if (token) {
    options.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }
  return fetch(`${baseUrl}/${url}`, options).then((res) => {
    return checkResponse(res)
  })
};

export const authorize = (email, password) => {
  return request("signin", "POST", {
    password: `${password}`,
    email: `${email}`,
  });
};

export const register = (name, email, password) => {
  return request("signup", "POST", {
    name: `${name}`,
    password: `${password}`,
    email: `${email}`,
  });
};

export const checkToken = (token) => {
  return request("users/me", "GET", null, token);
};

export const updateUser = (name, email, token) => {
  return request(
    "users/me",
    "PATCH",
    {
      name: `${name}`,
      email: `${email}`,
    },
    token
  );
};

