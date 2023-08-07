import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const getPosts = () => {
  return (dispatch) => {
    axios.get("http://localhost:3000/posts").then((res) => {
      dispatch({ type: GET_POSTS, payload: res.data });
    });
  };
};

export const ADD_POST = "ADD_POST";
export const addPost = (data) => {
  return (dispatch) => {
    axios.post("http://localhost:3000/posts", data).then((res) => {
      dispatch({ type: ADD_POST, payload: res.data });
    });
  };
};

export const EDIT_POST = "EDIT_POST";
export const editPost = (data) => {
  return (dispatch) => {
    axios.put(`http://localhost:3000/posts/${data.id}`, data).then((res) => {
      dispatch({ type: EDIT_POST, payload: res.data });
    });
  };
};

export const DELETE_POST = "DELETE_POST";
export const deletePost = (postId) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3000/posts/${postId}`).then((res) => {
      dispatch({ type: DELETE_POST, payload: postId });
    });
  };
};

export const EDIT_LIKES = "EDIT_LIKES";
export const editLikes = (data) => {
  return (dispatch) => {
    axios.put(`http://localhost:3000/posts/${data.id}`, data).then((res) => {
      dispatch({ type: EDIT_LIKES, payload: res.data });
    });
  };
};
