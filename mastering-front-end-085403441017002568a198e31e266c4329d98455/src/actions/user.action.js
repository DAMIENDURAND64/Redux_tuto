import axios from "axios";

export const GET_USER = "GET_USER";
export const getUser = () => {
  return (dispatch) => {
    axios.get("http://localhost:3000/user").then((res) => {
      dispatch({ type: GET_USER, payload: res.data[0] });
    });
  };
};

export const ADD_USER_LIKES = "ADD_USER_LIKES";
export const addUserLike = (data) => {
  return (dispatch) => {
    axios.put(`http://localhost:3000/user/${data.id}`, data).then((res) => {
      dispatch({ type: ADD_USER_LIKES, payload: res.data });
    });
  };
};
