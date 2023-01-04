import { v4 as uuidv4 } from "uuid";
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

    case "updateState":
      return {
        posts: [...action.payload],
      };
    case "updatePost":
      return {
        ...state,
        posts: [...action.payload],
      };
    default:
      throw new Error();
  }
}
