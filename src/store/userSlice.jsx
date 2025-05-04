// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.name = action.payload;
      state.loggedIn = true;
      localStorage.setItem("user", JSON.stringify(state));
    },
    logout(state) {
      state.name = "";
      state.loggedIn = false;
      localStorage.removeItem("user");
    },
    setLoggedInUser(state, action) {
      state.name = action.payload.name;
      state.loggedIn = action.payload.loggedIn;
    },
  },
});

export const { login, logout, setLoggedInUser } = userSlice.actions;
export default userSlice.reducer;
