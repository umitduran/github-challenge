import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import config from 'config';
import {GET_USER_GITHUB_INFO} from './actionTypes';

const useGetUserGithubInfoQuery = () => {
  const dispatch = useDispatch();
  return useCallback(
    () =>
      dispatch({
        type: GET_USER_GITHUB_INFO,
        payload: axios.get(config.randomAPI),
      }),
    [dispatch]
  );
};

export default useGetUserGithubInfoQuery;
