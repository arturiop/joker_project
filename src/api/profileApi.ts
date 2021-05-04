import { UserData, Response } from '../types/types';
import instance from './api';

const profileApi = {
  getProfile(userId: number): Promise<Response<UserData>> {
    return (
      instance.get(`users/${userId}`)
    );
  },
};
export default profileApi;
