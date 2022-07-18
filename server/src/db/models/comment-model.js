import { model } from 'mongoose';
import { CommentSchema } from '../schemas/comment-schema';

const Comment = model('reviews', CommentSchema);

export class CommentModel {
  async findByCommentId(comment_id) {
    const comment = await Comment.findOne({ comment_id });
    return comment;
  }

  async findByTitle(title) {
    const comments = await Comment.find({ title });
    return comments;
  }

  async createComment(commentInfo) {
    const newComment = await Comment.create(commentInfo);
    return newComment;
  }

  async update({ comment_id, update }) {
    const filter = { comment_id: comment_id };
    const option = { returnOriginal: false };

    const updatedComment = await Comment.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedComment;
  }

  async deleteById(comment_id) {
    const comment = await Comment.deleteOne({ comment_id });
    return comment;
  }
}

const commentModel = new CommentModel();

export { commentModel };
