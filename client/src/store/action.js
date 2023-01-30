export const getPosts = async () => {
  const response = await fetch("http://localhost:3001/post/getAll", {
    method: "GET",
  });
  const posts = await response.json();
  return posts;
};

export const createPost = async (payload, dispatch) => {
  const response = await fetch("http://localhost:3001/post/create", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
};

export const updatePost = async (payload) => {
  console.log(payload);
  await fetch(`http://localhost:3001/post/${payload._id}`, {
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

export const createTable = async (payload) => {
  const response = await fetch(`http://localhost:3001/table/create/`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  });
  return response.json();
};

export const getTable = async (payload) => {
  return await fetch(`http://localhost:3001/table/${payload}`, {
    method: "GET",
    mode: "cors",
  });
};
