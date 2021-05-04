import {
  CommentData, GetResponse, Response, SendCommentData,
} from '../types/types';
import instance from './api';

const commentsApi = {
  getComments(postId: number): Promise<GetResponse<CommentData>> {
    return (
      instance.get(`posts/${postId}/comments`)
    );
  },

  async sendComment(postId:number, data: SendCommentData):Promise<Response<CommentData>> {
    return (
      instance.post(`posts/${postId}/comments`, data)
    );
  },

  getUsersComments(email: string): Promise<GetResponse<CommentData>> {
    return (
      instance.get('comments', { params: { email } })
    );
  },
};
export default commentsApi;
