import axios from 'axios';
import { root, token } from './config';

const instance = axios.create({
  baseURL: root,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

instance.interceptors.request.use((config) => config, (error) => error);

instance.interceptors.response.use((config) => config.data, (error) => error);

export default instance;
