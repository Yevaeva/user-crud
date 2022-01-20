import request from "../helpers/request";
import * as actionTypes from "./actionTypes";

const apiUrl = "http://localhost:3007";

export const getUsers = (data = {}) => {
  let url = `${apiUrl}/users`;
  let query = "";
  if (data.search) {
    query = `?search=${data.search}`;
  }
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });
    request(url + query)
      .then((res) => {
        dispatch({ type: actionTypes.GET_USERS_SUCCESS, users: res.body });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.ERROR, errorMessage: error.errorMessage });
      });
  };
};

export const addUser = (data) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });
    request(`${apiUrl}/user`, "POST", data)
      .then((res) => {
        dispatch({ type: actionTypes.ADD_USER_SUCCESS, user: res.body });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.ERROR, errorMessage: error.errorMessage });
      });
  };
};

export const editUser = (data) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });
    request(`${apiUrl}/user/${data._id}`, "PUT", data)
      .then((res) => {
        dispatch({
          type: actionTypes.EDIT_USER_SUCCESS,
          user: res.body,
        });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.ERROR, errorMessage: error.errorMessage });
      });
  };
};

export const removeUser = (id) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });
    request(`${apiUrl}/user/${id}`, "DELETE")
      .then((res) => {
        dispatch({ type: actionTypes.REMOVE_USER_SUCCESS, id });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.ERROR, errorMessage: error.errorMessage });
      });
  };
};
