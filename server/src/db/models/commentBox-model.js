import { model } from 'mongoose';
import { CommentBoxSchema } from '../schemas/commentBox-schema';

const CommentBox = model('commentBoxes', CommentBoxSchema);

class CommentBoxModel {
  async create(commentBoxInfo) {
    const newCommentBox = await CommentBox.create(commentBoxInfo);
    return newCommentBox;
  }

  async findByPostId(postId) {
    const commentBox = await CommentBox.findOne({ postId: postId });
    return commentBox;
  }

  //새로운 댓글 하나 추가, 삭제 가능
  async update({ postId, update }) {
    const filter = { postId: postId };
    const option = { returnOriginal: false };

    const updatedCommentBox = await CommentBox.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedCommentBox;
  }

  async delete(postId) {
    const commentBox = await CommentBox.findOneAndDelete({ postId: postId });
    return commentBox;
  }
}

const commentBoxModel = new CommentBoxModel();

export { commentBoxModel };
