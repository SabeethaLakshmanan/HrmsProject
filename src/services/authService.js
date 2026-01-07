import api from "../api/apiClient";

export const loginApi = (email, password) => {
  return api.post("/auth/login", { email, password });
};

export const forgotPasswordApi = (email) => {
  return api.post("/auth/forgot-password", { email });
};

export const resetPasswordApi = (token, newPassword) => {
  return api.post("/auth/reset-password", {
    token,
    newPassword,
  });
};
