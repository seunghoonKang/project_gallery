import axios from 'axios';

const writeApi = {
  inputApi: function inputApi(body, token) {
    return axios.post('http://localhost:8000/api/exhibition', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default writeApi;
