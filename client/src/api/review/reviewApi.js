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
    return axios.get(`/api/comment/postId/${projectReviewId.postId}`);
  },
  deleteReviewApi: function deleteReviewApi(projectReviewId, commentId) {
    return axios.delete(`/api/comment/${projectReviewId.postId}/${commentId}`, {
      headers,
    });
  },
};
export { reviewApi };
