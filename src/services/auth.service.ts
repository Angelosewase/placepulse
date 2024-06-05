import { AxiosAPI } from "../utils/AxiosInstance"

export const loginService  = ({email, password}:{email: string, password: string}) =>{
    return AxiosAPI.post("/auth/login", {
        email, 
        password
    })
}