import axios from 'axios';

const initialState = {
  userSession: {},
  isLoading: false,
  loginErr: false
};

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT = 'LOGOUT';

export const loginUser = (username, password) => {
  return {
    type: LOGIN_USER,
    payload: axios.post('/login', { username, password })
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT,
    payload: axios.get('/logout')
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${LOGIN_USER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${LOGIN_USER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        userSession: action.payload.data
      };
    case `${LOGIN_USER}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        loginErr: true
      };
    case `${LOGOUT}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${LOGOUT}_FULFILLED`:
      return {
        ...state,
        userSession: action.payload.data
      };
    default:
      return state;
  }
}
