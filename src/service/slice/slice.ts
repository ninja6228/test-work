import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../utils/type/type";

interface InitialState {
  data: IPost[];
}

const initialState: InitialState = {
  data: [],
};

const slice = createSlice({
  name: "slicePost",
  initialState,
  reducers: {
    savePost: (state, action: PayloadAction<IPost[]>) => {
      if (action.payload) {
        state.data = action.payload.map((post) => ({
          ...post,
          like: false,
          img: "https://images.unsplash.com/photo-1715858145910-6f534b427b7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }));
      }
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((post) => post.id !== action.payload);
    },
    likePost: (state, actions: PayloadAction<number>) => {
      state.data.map((post) => {
        if (post.id === actions.payload) {
          post.like = !post.like;
        }
        return post;
      });
    },
  },
});

const { actions, reducer } = slice;
export default reducer;
export const { deletePost, savePost, likePost } = actions;
