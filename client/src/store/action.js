export const createPost = async (payload, dispatch) => {
  const response = await fetch("http://localhost:3001/post/create", {
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
  const response = await fetch("http://localhost:3001/post/update", {
    method: "PUT",
    mode: "cors",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  });

  return dispatch({
    type: "updatePost",
    payload: payload,
  });
};

export const getOne = async (payload, dispatch) => {
  const response = await fetch(`http://localhost:3001/post/${payload}`, {
    method: "GET",
    mode: "cors",
  });

  return response;
};
