import { apiDelete, apiPost } from "@/lib/axios/api-client";
import { AUTH_URLS } from "@/lib/url/urls";

export const loginUser = async (payload) => {
  return await apiPost(AUTH_URLS.LOGIN, payload);

};

export const registerUser = async (payload) => {
  return await apiPost(AUTH_URLS.REGISTER, payload);
};

export const logoutUser = async () => {
  return await apiDelete(AUTH_URLS.LOGOUT);
};
