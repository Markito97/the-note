import { createContext } from "react";
export const ContextApp = createContext();

export const initialState = {
  posts: [],
};

export function postsReducer(state, action) {
  switch (action.type) {
    case "addPost":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "updateNoteTitle":
      return {
        ...state,
        posts: [...action.payload],
      };
    case "updateState":
      return {
        posts: [...action.payload],
      };
    case "updatePost":
      return {
        ...state,
        posts: [...action.payload],
      };
    case "deletePost":
      return {
        ...state,
        posts: [...state.posts.filter((post) => post.id !== action.payload)],
      };
    default:
      throw new Error();
  }
}
