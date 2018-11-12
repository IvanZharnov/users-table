import {
  GET_USERS,
  DELETE_USER,
  SHOW_MODAL,
  HIDE_MODAL,
} from './action';

const initialState = {
  users: [],
  modalIsActive: false,
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {...state, modalIsActive: true};
    case HIDE_MODAL:
      return {...state, modalIsActive: false};
    case GET_USERS:
      return action.users;
    case DELETE_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default users;
