import axios from 'axios';
const recruitment = {
  recruitmentProjectList: function recruitmentProjectList() {
    return axios.get('http://localhost:8000/api/recruitment/list');
  },
  recruitmentProject: function recruitmentProject(id) {
    return axios.get(`http://localhost:8000/api/recruitment/postId/${id}`);
  },
};

export { recruitment };
