import axios from 'axios';
const writeApi = {
  recruitment: function (data, headers) {
    console.log(headers);
    return axios.post('http://localhost:8000/api/recruitment', data, {
      headers,
    });
  },
  exhibitionInputApi: function exhibitionInputApi(data, headers) {
    console.log(headers);
    return axios.post('http://localhost:8000/api/exhibition', data, {
      headers,
    });
  },
  propsoalInputApi: function propsoalInputApi(data, headers) {
    console.log(headers);
    return axios.post('http://localhost:8000/api/proposal', data, {
      headers,
    });
  },
};
export { writeApi };
