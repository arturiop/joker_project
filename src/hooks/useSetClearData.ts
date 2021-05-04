import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useSetClearData = (set: any, clear: any) => {
  const dispatch = useDispatch();

  const { id } = useParams<ParamsType>();

  useEffect(() => {
    dispatch(set(Number(id)));
    return () => {
      dispatch(clear());
    };
  }, [id]);
  return id;
};
export default useSetClearData;
type ParamsType = { id: string };
