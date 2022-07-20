import axios from 'axios';

const userApi = {
  loginApi: function loginApi(body) {
    return axios.post('http://localhost:8000/api/user/login', body);
  },
  registerApi: function registerApi(body) {
    return axios.post('http://localhost:8000/api/user', body);
  },
  homeNavApi: function homeNavApi(token) {
    return axios.get('http://localhost:8000/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default userApi;
