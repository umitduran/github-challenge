import {GET_USER_GITHUB_INFO} from './actionTypes';

const initialState = {
  userGithubInfo: {},
  isFulfilled: false,
  isLoading: false,
  hasError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USER_GITHUB_INFO}_PENDING`:
      return {
        ...state,
        isFulfilled: false,
        isLoading: true,
        hasError: false,
        userGithubInfo: {},
      };

    case `${GET_USER_GITHUB_INFO}_FULFILLED`:
      return {
        ...state,
        isFulfilled: true,
        isLoading: false,
        hasError: false,
        userGithubInfo: action.payload.data,
      };

    case `${GET_USER_GITHUB_INFO}_REJECTED`:
      return {
        ...state,
        isFulfilled: false,
        isLoading: false,
        hasError: true,
        userGithubInfo: {},
      };

    default:
      return state;
  }
};

export default reducer;
