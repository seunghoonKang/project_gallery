import { commentModel } from '../db';

class CommentService {
  constructor(commentModel) {
    this.commentModel = commentModel;
  }

  async getComment(postId) {
    const comment = await this.reviewModel.findById(postId);
    return comment;
  }

  async getComments(title) {
    const comments = await this.commentModel.findByTitle(title);
    return comments;
  }

  async addComment(commentInfo) {
    const newComment = await this.commentModel.create(commentInfo);
    return newComment;
  }

  async editComment(postId, toUpdate) {
    const editedComment = await this.commentModel.update({
      postId,
      update: toUpdate,
    });

    return editedComment;
  }

  async deleteComment(postId) {
    const deletedComment = await this.commentModel.delete(postId);
    return deletedComment;
  }
}

const commentService = new CommentService(commentModel);

export { commentService };
