import axios from "axios";

export const contactsApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setAuthHeader = (token) => {
  contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete contactsApi.defaults.headers.common.Authorization;
};
