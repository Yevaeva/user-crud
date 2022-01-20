import * as actionTypes from "./actionTypes";

const defaultState = {
  users: [],
  user: null,
  errorMessage: "",
  successMessage: "",
  loading: false,
  addOrEditUserSuccess: false,
  removeUserSuccess: false,
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        ...state,
        loading: true,
        addUserSuccess: false,
        removeUserSuccess: false,
        addOrEditUserSuccess: false,
        errorMessage: "",
        successMessage: "",
      };
    case actionTypes.ERROR:
      return {
        ...state,
        errorMessage: "❌❌❌ " + action.errorMessage,
        loading: false,
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    case actionTypes.EDIT_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        loading: false,
        successMessage: "🖍🖍🖍 User edited successfully!!!",
        addOrEditUserSuccess: true,
      };
    }
    case actionTypes.ADD_USER_SUCCESS: {
      let users = [...state.users, action.user];
      return {
        ...state,
        users,
        loading: false,
        successMessage: "✅✅✅ User added successfully!!!",
        addOrEditUserSuccess: true,
      };
    }
    case actionTypes.REMOVE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        successMessage: "🗑🗑🗑 User deleted successfully!!!",
        removeUserSuccess: true,
      };
    }
    default:
      return state;
  }
};

export { reducer };
