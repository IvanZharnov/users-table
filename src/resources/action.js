import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const DELETE_USER = 'DELETE_USER';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const getUsers = () => async (dispatch) => {

  const users = await axios.get(`http://localhost:4000/users`);
  dispatch({
    type: GET_USERS,
    users: users.data,
  });
};

export const deleteUser = (id) => async (dispatch) => {

  const users = await axios.delete(`http://localhost:4000/delete/${id}`);
  console.log('DELETE USER', users);
  dispatch({
    type: DELETE_USER,
    id,
  });
};

export const createUser = (first_name, last_name) => async (dispatch) => {

  const newUser = await axios.post(`http://localhost:4000/create`,
    {
      first_name,
      last_name
    }
  );
  dispatch({
    type: CREATE_USER,
    newUser: newUser.data,
  });
};

export const updateUser = (id, first_name, last_name) => async (dispatch) => {

  const updatedUser = await axios.put(`http://localhost:4000/update/${id}`,
    {
      id,
      first_name,
      last_name
    }
  );
  dispatch({
    type: UPDATE_USER,
    updatedUser: updatedUser.data,
  });
};
