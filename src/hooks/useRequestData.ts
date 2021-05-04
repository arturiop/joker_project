import Qs from 'qs';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useRequestData = (request: any, currentPage: number): void => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const parsed = Qs.parse(history.location.search.substr(1));
    const actualPage = parsed.page ? Number(parsed.page) : currentPage;

    dispatch(request(actualPage));
  }, []);
};
export default useRequestData;
