import {useSelector} from 'react-redux';

export const useLoadingState = () => {
  const {isLoading, hasError, isFulfilled} = useSelector(state => state.userInfo);
  return {isLoading, hasError, isFulfilled};
};
