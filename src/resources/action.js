import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const DELETE_USER = 'DELETE_USER';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const getUsers = () => async (dispatch) => {

  const { data } = await axios.get(`https://reqres.in/api/users`);
  console.log('GET USERS', data);
  dispatch({
    type: GET_USERS,
    users: data.data,
  });
};

export const deleteUser = (id) => async (dispatch) => {

  const users = await axios.delete(`https://reqres.in/api/users/${id}`);
  console.log('DELETE USER', users);
  dispatch({
    type: DELETE_USER,
    id,
  });
};

export const createUser = (first_name, last_name) => async (dispatch) => {

  const newUser = await axios.post(`https://reqres.in/api/users`,
    {
      first_name,
      last_name
    }
  );
  console.log('NEW USER', newUser);
  dispatch({
    type: CREATE_USER,
    newUser: newUser.data,
  });
};

export const updateUser = (id, first_name, last_name) => async (dispatch) => {

  const users = await axios.put(`https://reqres.in/api/users/${id}`,
    {
      first_name,
      last_name,
      id
    }
  );
  console.log('UPDATE USER', users);
  dispatch({
    type: UPDATE_USER,
    updatedUser: users.data,
  });
};
