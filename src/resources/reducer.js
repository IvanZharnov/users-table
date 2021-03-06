import {
  GET_USERS,
  DELETE_USER,
  CREATE_USER,
  UPDATE_USER,
} from './action';

const initialState = {
  users: []
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case DELETE_USER:
      return state.filter(item => item.id !== action.id);
    case CREATE_USER:
      return state.concat(action.newUser)
    case UPDATE_USER:
      return state.map(
        item => item.id === action.updatedUser.id ? action.updatedUser : item
      );
    default:
      return state;
  }
};

export default users;
