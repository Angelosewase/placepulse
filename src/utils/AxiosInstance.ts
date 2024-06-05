import axios from "axios";

export const AxiosAPI = axios.create({
    baseURL: "http://localhost:5454/api/v1",
    headers:{
        "Content-Type": "application/json"
    }
})