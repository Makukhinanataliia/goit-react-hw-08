import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi, setAuthHeader } from "./contactsApi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token provided");
    }

    try {
      setAuthHeader(token);
      const response = await contactsApi.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to fetch contacts"
      );
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token provided");
    }

    try {
      setAuthHeader(token);
      const response = await contactsApi.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Failed to add contact");
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token provided");
    }

    try {
      setAuthHeader(token);
      await contactsApi.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to delete contact"
      );
    }
  }
);
