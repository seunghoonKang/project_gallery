import axios from 'axios';
const exhibitionApi = {
  exhibitionProjects: function exhibitionProjects() {
    return axios.get('/api/exhibition/list');
  },
  exhibitionProject: function exhibitionProject(id) {
    return axios.get(`/api/exhibition/postId/${id}`);
  },
};

export { exhibitionApi };
