import {
  GET_USERS,
  DELETE_USER,
} from './action';

const initialState = {
  users: [],
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case DELETE_USER:
      return state.filter(item => item.id !== action.id)
    default:
      return state;
  }
};

export default users;
