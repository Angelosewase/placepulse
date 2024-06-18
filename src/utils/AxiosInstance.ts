import axios from "axios";
import cookie from "react-cookies";
console.log("token --> ", cookie.load("auth_token"));
export const AxiosAPI = axios.create({
  baseURL: "http://localhost:5454/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const AuthorizedAxiosAPI = axios.create({
  baseURL: "http://localhost:5454/api/v1",
  headers: {
    // "Content-Type": "application/json",
    Authorization: `Bearer ${cookie.load("auth_token")}`,
  },
});
