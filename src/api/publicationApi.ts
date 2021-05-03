import { PostData, Response } from '../types/types';
import instance from './api';

const publicationApi = {

  getPublication(postId: number): Promise<Response<PostData>> {
    return (
      instance.get(`posts/${postId}`)
        .then((response) => response.data)
    );
  },

};

export default publicationApi;
