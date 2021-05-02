import {
  CommentData, GetResponse, Response, SendCommentData,
} from '../types/types';
import instance from './api';

const commentsApi = {
  getComments(postId: number): Promise<GetResponse<CommentData>> {
    return (
      instance.get(`posts/${postId}/comments`)
        .then((response) => response.data)
    );
  },

  async sendComment(postId:number, data: SendCommentData):Promise<Response<CommentData>> {
    return (
      instance.post(`posts/${postId}/comments`, data)
        .then((response) => response.data)
    );
  },

  getCommentsForUser(email: string): Promise<GetResponse<CommentData>> {
    return (
      instance.get(`comments?email=${email}`)
        .then((response) => response.data));
  },
};
export default commentsApi;
