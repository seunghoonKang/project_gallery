import { commentModel } from '../db';

class CommentService {
  constructor(commentModel) {
    this.commentModel = commentModel;
  }
  async addCommentBox() {
    const newCommentBox = await this.commentModel.create();
    return newCommentBox._id;
  }

  async addComment({ postId, commentInfo }) {
    const commentBox = await this.commentModel.findById(postId);
    commentBox.commentList.push(commentInfo);
    return commentBox;
  }

  async getCommentBox(postId) {
    const comments = await this.commentModel.findById(postId);
    return comments;
  }

  async editCommentBox(commentBoxId, postId) {
    const editedCommentBox = await this.commentModel.update({
      commentBoxId,
      postId,
    });
    return editedCommentBox;
  }

  async deleteComment(commentId) {
    const deletedComment = await this.commentModel.delete(commentId);
    return deletedComment;
  }
}

const commentService = new CommentService(commentModel);

export { commentService };
