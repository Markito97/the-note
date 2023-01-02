import { v4 as uuidv4 } from "uuid";
import { createContext } from "react";
export const ContextApp = createContext();

export const initialState = {
  posts: [
    {
      id: "1",
      title: "Aboba1123123123123123asdacczx",
      description: "Mixailovich",
      favorite: false,
    },
    { id: "2", title: "Aboba2", description: "Mixailovich", favorite: false },
    { id: "3", title: "Aboba3", description: "Mixailovich", favorite: false },
  ],
  currentPost: "",
  favoritePosts: [],
};

export function postsReducer(state, action) {
  switch (action.type) {
    case "addPost":
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: uuidv4(), title: "Title", description: "Description" },
        ],
      };
    case "removePost":
      console.log(state.currentPost);
      return {
        ...state,
        posts: [...state.posts.filter((post) => post.id !== state.currentPost)],
      };
    case "setId":
      return {
        ...state,
        currentPost: action.payload,
      };
    case "setFavoritePost":
      const favoritePost = state.posts.find(
        (post) => post.id === state.currentPost
      );
      console.log(favoritePost);
      return {
        ...state,
        favoritePost: [{ ...favoritePost, favorite: true }],
      };
    default:
      throw new Error();
  }
}
