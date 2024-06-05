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

export const forgotPasswordService = ({ email }: { email: string }) => {
  return AxiosAPI.post("/auth/sendCode", {
    email,
  });
};
export const verifyCodeService = ({
  email,
  code,
}: {
  email: string;
  code: string;
}) => {
  return AxiosAPI.post("/auth/verify", {
    email,
    code,
  });
};
export const resetPasswordService = ({
  email,
  newPassword,
}: {
  email: string;
  newPassword: string;
}) => {
  return AxiosAPI.post("/auth/resetPassword", {
    email,
    newPassword,
  });
};
