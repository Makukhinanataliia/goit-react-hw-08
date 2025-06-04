import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Базовий URL для бекенду GOIT
axios.defaults.baseURL = "https://connections-api.goit.global";

// Функція для додавання токена до заголовків авторизації
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Функція для видалення токена з заголовків авторизації
const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

// Отримати всі контакти
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token provided");
    }

    try {
      setAuthHeader(token);
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to fetch contacts"
      );
    }
  }
);

// Додати контакт
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token provided");
    }

    try {
      setAuthHeader(token);
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Failed to add contact");
    }
  }
);

// Видалити контакт
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token provided");
    }

    try {
      setAuthHeader(token);
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to delete contact"
      );
    }
  }
);
