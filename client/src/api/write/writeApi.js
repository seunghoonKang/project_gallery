import axios from 'axios';
const writeApi = {
  recruitment: function (data, headers) {
    console.log(headers);
    return axios.post('/api/recruitment', data, {
      headers,
    });
  },
  exhibitionInputApi: function exhibitionInputApi(data, headers) {
    console.log(headers);
    return axios.post('/api/exhibition', data, {
      headers,
    });
  },
  propsoalInputApi: function propsoalInputApi(data, headers) {
    console.log(headers);
    return axios.post('/api/proposal', data, {
      headers,
    });
  },
};
export { writeApi };
