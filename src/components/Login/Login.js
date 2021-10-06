import React from 'react';
import {Input} from 'antd';
import {useGetUserGithubInfoQuery,useLoadingState} from 'features/login';
// import {} from 'features/login';
// import classes from './Login.module.css';

const {Search} = Input;

const Login = () => {
  const {isLoading, hasError, isFulfilled} = useLoadingState();
  const getUserGithubInfo = useGetUserGithubInfoQuery();
  const isPristine = !isLoading && !hasError && !isFulfilled;

  return (
    <Search
      placeholder="please enter gitHub personal access token to continue!"
      onSearch={getUserGithubInfo}
      enterButton
    />
  );
};

export default Login;
