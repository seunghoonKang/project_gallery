import axios from 'axios';

const exhibition = {
  exhibitionProjects: function exhibitionProjects() {
    return axios.get('http://localhost:8000/api/exhibition/list');
  },
};

export { exhibition };
