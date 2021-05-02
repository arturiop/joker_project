import { GetResponse, UserData } from '../types/types';
import instance from './api';

const usersApi = {

  getUsers(currentPage: number):Promise<GetResponse<UserData>> {
    return (
      instance.get(`users?page=${[currentPage]}`)
        .then((response) => response.data)
    );
  },
};

export default usersApi;
