import axios from 'axios';

const writeApi = {
  inputApi: function inputApi(body, token) {
    return axios.post('/api/proposal', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default writeApi;
