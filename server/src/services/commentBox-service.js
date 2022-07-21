import { commentBoxModel } from '../db';

class CommentBoxService {
  constructor(commentBoxModel) {
    this.commentBoxModel = commentBoxModel;
  }

  async addCommentBox(postId, commentBoxInfo) {
    const newCommentBox = await this.commentBoxModel.create({
      postId,
      commentList: [commentBoxInfo],
    });
    return newCommentBox;
  }

  async getCommentBox(postId) {
    const commentBox = await this.commentBoxModel.findByPostId(postId);
    return commentBox;
  }

  async editCommentBox(postId, toUpdate) {
    const editedCommentBox = await this.commentBoxModel.update({
      postId,
      update: toUpdate,
    });
    return editedCommentBox;
  }

  async deleteCommentBox(postId) {
    const deletedCommentBox = await this.commentBoxModel.delete(postId);
    return deletedCommentBox;
  }

  // 댓글 하나가 추가된 commentBox를 리턴
  async addComment(postId, commentInfo) {
    const commentBox = await this.commentBoxModel.findByPostId(postId);
    const commentList = await commentBox.commentList.push({ commentInfo });
    return commentBox;
  }

  async getComment(postId, commentId) {
    const commentBox = await this.commentBoxModel.findByPostId(postId);
    const commentList = await commentBox.commentList;

    for await (const commentIter of commentList) {
      if (commentIter._id === commentId) {
        return commentIter;
      }
    }
  }

  // 댓글 하나가 삭제된 commentBox를 리턴
  async deleteComment(postId, commentId) {
    const commentBox = await this.commentBoxModel.findByPostId(postId);
    const commentList = await commentBox.commentList;

    for (const i in commentList) {
      if (commentList[i]._id === commentId) {
        commentList.splice(i, 1);
        break;
      }
    }

    return commentBox;
  }
}

const commentBoxService = new CommentBoxService(commentBoxModel);

export { commentBoxService };
