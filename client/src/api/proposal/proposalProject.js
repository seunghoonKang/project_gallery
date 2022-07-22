import axios from 'axios';
const proposal = {
  proposalProjectList: function proposalProjectList() {
    return axios.get('http://localhost:8000/api/proposal/list');
  },
  proposalProject: function proposalProject(id) {
    return axios.get(`http://localhost:8000/api/proposal/postId/${id}`);
  },
};

export { proposal };
