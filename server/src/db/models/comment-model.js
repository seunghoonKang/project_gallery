import { model } from 'mongoose';
import { CommentBoxSchema } from '../schemas/comment-schema';

const Comment = model('comments', CommentBoxSchema);

class CommentModel {
  async create() {
    const emptyStr = '';
    const emptyArr = [];
    const newCommentBox = await Comment.create({ emptyStr, emptyArr });
    return newCommentBox;
  }

  async findById(postId) {
    const commentBox = await Comment.findById(postId);
    return commentBox;
  }

  async update({ commentBoxId, update }) {
    const filter = { _id: commentBoxId };
    const option = { returnOriginal: false };

    const updatedCommentBox = await Comment.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedCommentBox;
  }

  async delete(commentId) {
    const commentBox = await Comment.findOneAndDelete({
      _id: commentId,
    });
    return commentBox;
  }
}

const commentModel = new CommentModel();

export { commentModel };
