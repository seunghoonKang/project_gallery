import axios from 'axios';
const headers = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
};
const reviewApi = {
  postReviewApi: function postReviwApi(commentData, projectReviewId) {
    return axios.post(
      `/api/comment/postId/${projectReviewId.postId}`,
      commentData,
      {
        headers,
      }
    );
  },
  getReviewApi: function getReviewApi(projectReviewId) {
    console.log('여긴 api폴더:', projectReviewId);
    return axios.get(`/api/comment/postId/${projectReviewId.postId}`);
  },
};
export { reviewApi };
