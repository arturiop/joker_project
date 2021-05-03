import { GetResponse, PostData } from '../types/types';
import instance from './api';

const postApi = {

  getPosts(currentPage: number, userId?: number):Promise<GetResponse<PostData>> {
    return (
      instance.get(`posts?page=${[currentPage]}${userId === undefined ? '' : `&user_id=${userId}`}`)
        .then((response) => response.data)
    );
  },

};

export default postApi;
