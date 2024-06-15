import axios from "axios";
import cookies from "react-cookies";
console.log("token --> ",cookies.load("auth_token"));
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
    "Authorization": `Bearer ${cookies.load("auth_token")}`
  },
})