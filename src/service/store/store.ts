import { configureStore } from "@reduxjs/toolkit";
import { apiPost } from "../api/api";
import posts from "../slice/slice";

const store = configureStore({
  reducer: { posts, [apiPost.reducerPath]: apiPost.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPost.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
