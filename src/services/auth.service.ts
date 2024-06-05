import { AxiosAPI } from "../utils/AxiosInstance";

export const loginService = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return AxiosAPI.post("/auth/login", {
    email,
    password,
  });
};
export const registerService = ({
  email,
  password,
  phone,
  role,
}: {
  email: string;
  password: string;
  phone: string;
  role?: string;
}) => {
  return AxiosAPI.post("/auth/signup", {
    email,
    password,
    phone,
    role: role ?? "USER",
  });
};
