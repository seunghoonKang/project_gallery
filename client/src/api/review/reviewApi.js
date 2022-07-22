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
  getReviewApi: function getReviewApi(postIdData) {
    return axios.get(`/api/comment/postId/${postIdData.postId}`);
  },
};
export { reviewApi };
