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
    console.log('api:', projectReviewId);
    return axios.get(`/api/comment/postId/${projectReviewId}`);
  },
  deleteReviewApi: function deleteReviewApi(projectReviewId, commentId) {
    return axios.delete(`/api/comment/${projectReviewId}/${commentId}`, {
      headers,
    });
  },
};
export { reviewApi };
