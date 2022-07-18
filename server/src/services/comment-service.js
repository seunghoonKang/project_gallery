import { commentModel } from '../db';

class CommentService {
  constructor(commentModel) {
    this.commentModel = commentModel;
  }

  async getComment(comment_id) {
    const comment = await this.reviewModel.findByCommentId(comment_id);
    return comment;
  }

  async getComments(title) {
    const comments = await this.commentModel.findByTitle(title);
    return comments;
  }

  async addComment(commentInfo) {
    const createdComment = await this.commentModel.createComment(commentInfo);
    return createdComment;
  }

  async setComment(comment_id, toUpdate) {
    const Comment = await this.commentModel.update({
      comment_id,
      update: toUpdate,
    });

    return Comment;
  }

  async deleteComment(comment_id) {
    const comment = await this.commentModel.deleteById(comment_id);
    return comment;
  }
}

const commentService = new CommentService(commentModel);

export { commentService };
