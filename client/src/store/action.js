export const updatePosts = async () => {
  return await fetch("http://localhost:3001/post/getAll", {
    method: "GET",
  }).then((response) => response.json());
};

export const createPost = async (payload, dispatch) => {
  await fetch("http://localhost:3001/post/create", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  });
  return dispatch({
    type: "addPost",
    payload: payload,
  });
};

export const updatePost = async (payload, dispatch) => {
  await fetch("http://localhost:3001/post/update", {
    method: "PUT",
    mode: "cors",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const getPost = async (payload) => {
  return await fetch(`http://localhost:3001/post/${payload}`, {
    method: "GET",
    mode: "cors",
  });
};

export const deletePost = async (payload, dispatch) => {
  await fetch(`http://localhost:3001/post/${payload}`, {
    method: "DELETE",
  });
  return dispatch({
    type: "deletePost",
    payload: payload,
  });
};
