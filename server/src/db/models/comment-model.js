import { model } from 'mongoose';
import { CommentSchema } from '../schemas/comment-schema';

const Comment = model('comments', CommentSchema);

export class CommentModel {
  async findById(postId) {
    const comment = await Comment.findOne({ postId });
    return comment;
  }

  async findByTitle(title) {
    const comments = await Comment.find({ title });
    return comments;
  }

  async create(commentInfo) {
    const newComment = await Comment.create(commentInfo);
    return newComment;
  }

  async update({ postId, update }) {
    const filter = { postId: postId };
    const option = { returnOriginal: false };

    const updatedComment = await Comment.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedComment;
  }

  async delete(postId) {
    const comment = await Comment.deleteOne({ postId });
    return comment;
  }
}

const commentModel = new CommentModel();

export { commentModel };
