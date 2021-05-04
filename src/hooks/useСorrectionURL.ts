import { useEffect } from 'react';
import Qs from 'qs';
import { useHistory } from 'react-router';

const useСorrectionURL = (path: string, currentPage: number): void => {
  const history = useHistory();

  useEffect(() => {
    const query: QueryParamsType = {};
    if (currentPage !== 1) query.page = String(currentPage);
    history.push({
      pathname: path,
      search: Qs.stringify(query),
    });
  }, [currentPage, history]);
};

export default useСorrectionURL;
type QueryParamsType = { page?: string };
