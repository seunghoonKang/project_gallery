import axios from 'axios';
const recruitment = {
  recruitmentProjectList: function recruitmentProjectList() {
    return axios.get('/api/recruitment/list');
  },
  recruitmentProject: function recruitmentProject(id) {
    return axios.get(`/api/recruitment/postId/${id}`);
  },
};

export { recruitment };
