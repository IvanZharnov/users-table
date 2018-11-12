import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const DELETE_USER = 'DELETE_USER';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = () => {
  return {
    type: SHOW_MODAL,
  };
};

export const hideModal = () => {
   return {
    type: HIDE_MODAL,
  };
};

export const getUsers = () => async (dispatch) => {

  const users = await fetch(`https://reqres.in/api/users?page=3`)
    .then(response => response.json());
  dispatch({
    type: GET_USERS,
    users: users.data,
  });
};

export const deleteUser = (id) => async (dispatch) => {

  console.log('ID ACTION', id);

  const users = await axios.delete(`https://reqres.in/api/users/2`, { id });
    dispatch({
      type: DELETE_USER,
      users: users.data,
    });
};
