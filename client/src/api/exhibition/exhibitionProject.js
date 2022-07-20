import axios from 'axios';
const exhibition = {
  exhibitionProjects: function exhibitionProjects() {
    console.log('hi');
    return axios.get('http://localhost:8000/api/exhibition/list');
  },
};

export { exhibition };
