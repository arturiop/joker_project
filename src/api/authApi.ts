import { AuthUser, Response, UserData } from '../types/types';
import instance from './api';

const authApi = {
  authUser(data: AuthUser): Promise<Response<UserData>> {
    return (
      instance.post('users', data)
        .then((response) => response.data)
    );
  },

};
export default authApi;
