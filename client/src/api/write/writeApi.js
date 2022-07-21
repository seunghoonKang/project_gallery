import axios from 'axios';
const writeApi = {
  recruitment: function (data, headers) {
    console.log(headers);
    return axios.post('http://localhost:8000/api/recruitment', data, {
      headers,
    });
  },
};

export { writeApi };
