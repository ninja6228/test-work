import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../utils/type/type";

export const apiPost = createApi({
  reducerPath: "apiPost",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com`,
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => `/posts?_limit=10`,
      providesTags: ['Post']
    }),
  }),
});

export const { useGetPostsQuery } = apiPost;
