import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

// Встановлює заголовок Authorization з токеном
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Очищає заголовок Authorization
const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

// Операція реєстрації користувача
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      // Надсилаємо всі поля: name, email, password
      const res = await axios.post("/users/signup", credentials);

      // Встановлюємо токен в заголовок для подальших запитів
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      // Повертаємо детальний текст помилки з API або дефолтний
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || "Unknown error"
      );
    }
  }
);

// Операція логіну користувача
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || "Unknown error"
      );
    }
  }
);

// Операція логауту користувача
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || error.message || "Unknown error"
    );
  }
});

// Операція оновлення даних користувача (після перезавантаження сторінки)
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token");
    }

    try {
      setAuthHeader(token);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || "Unknown error"
      );
    }
  }
);
