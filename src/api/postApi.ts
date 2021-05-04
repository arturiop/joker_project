import { GetResponse, PostData } from '../types/types';
import instance from './api';

const postApi = {

  getPosts(currentPage: number, userId?: number):Promise<GetResponse<PostData>> {
    return (
      instance.get('posts', {
        params: {
          page: currentPage,
          user_id: userId,
        },
      })
    );
  },

};

export default postApi;
