import axios from 'axios';
const token = localStorage.getItem('token');
const userApi = {
  loginApi: function loginApi(body) {
    return axios.post('/api/user/login', body);
  },
  registerApi: function registerApi(body) {
    return axios.post('/api/user', body);
  },
  homeNavApi: function homeNavApi() {
    return axios.get('/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  findUserInfo: function findUserInfo(userId) {
    return axios.get(`./api/user/${userId}`);
  },
};
export default userApi;
