import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const DELETE_USER = 'DELETE_USER';

export const getUsers = () => async (dispatch) => {

  const { data } = await axios.get(`https://reqres.in/api/users`);
    console.log('popa', data);
  dispatch({
    type: GET_USERS,
    users: data.data,
  });
};

export const deleteUser = (id) => async (dispatch) => {

  console.log('ID ACTION', id);

  const users = await axios.delete(`https://reqres.in/api/users/${id}`);
  console.log('[p[a', users);
    dispatch({
      type: DELETE_USER,
      id,
    });
};
