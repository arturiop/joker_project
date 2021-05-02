import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gorest.co.in/public-api/',
  headers: {
    Authorization: 'Bearer 47ba216e435181934e934f3f82bedeb7d5c05c769d8ba29c67650e76bb415630',
  },
});

export default instance;
