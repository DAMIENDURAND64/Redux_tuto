import { ADD_USER_LIKES, GET_USER } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case ADD_USER_LIKES:
      return {
        ...state,
        likes: action.payload.likes,
      };

    default:
      return state;
  }
}
