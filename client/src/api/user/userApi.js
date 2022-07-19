import axios from 'axios';

const userApi = {
  loginApi: function loginApi(body) {
    return axios.post('http://localhost:8000/api/user/login', body);
  },
  registerApi: function registerApi(body) {
    return axios
      .post('http://localhost:8000/api/user/register', body)

      .then((res) => {
        alert('회원가입 정상적으로 되었습니다 ');
        window.location.href = '/login';
      });
  },
  homeNavApi: function homeNavApi(token) {
    return axios.get('http://localhost:8000/api/user/info', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default userApi;
