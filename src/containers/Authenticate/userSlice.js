import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const register = createAsyncThunk(
  "users/register",
  //   async (userId, thunkAPI) => {
  async (payload) => {
    // const response = await userApi.fetchById(userId);
    // return response.data;
    const data = await userApi.register(payload);
    localStorage.setItem("access_token", data.jwt);
    localStorage.setItem("user", JSON.stringify(data.user));
    return {};
  }
);
export const login = createAsyncThunk(
  "users/login",
  //   async (userId, thunkAPI) => {
  async (payload) => {
    // const response = await userApi.fetchById(userId);
    // return response.data;
    const data = await userApi.login(payload);
    localStorage.setItem("access_token", data.jwt);
    localStorage.setItem("user", JSON.stringify(data.user));
    return {};
  }
);
const userReducer = createSlice({
  name: "user",
  initialState: {
    setting: {},
    current: JSON.parse(localStorage.getItem("user")) || {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      state.current = {};
    },
    // increase(state) {
    //   return state + 1;
    // },
    // decrement(state) {
    //   return state - 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { increase, decrement, incrementByAmount, logout } =
  userReducer.actions;
export default userReducer.reducer;
