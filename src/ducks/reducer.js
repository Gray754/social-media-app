import axios from 'axios';

const initialState = {
  userInfo: [],
  isLoading: false,
  isErr: false
};

const GET_USER_INFO = 'GET_USER_INFO';

export const getUserInfo = () => {
  return {
    type: GET_USER_INFO,
    payload: axios.get('/user/info')
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER_INFO}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_USER_INFO}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload.data
      };
    case `${GET_USER_INFO}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isErr: true
      };
    default:
      return state;
  }
}
