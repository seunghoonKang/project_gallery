import axios from 'axios';
const proposal = {
  proposalProjectList: function proposalProjectList() {
    return axios.get('/api/proposal/list');
  },
  proposalProject: function proposalProject(id) {
    return axios.get(`/api/proposal/postId/${id}`);
  },
};

export { proposal };
