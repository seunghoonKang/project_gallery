import { commentBoxModel } from '../db';

class CommentBoxService {
  constructor(commentBoxModel) {
    this.commentBoxModel = commentBoxModel;
  }

  // 댓글 box에 대한 동작들
  async addCommentBox(postId, commentInfo) {
    const newCommentBox = await this.commentBoxModel.create({
      postId,
      commentList: commentInfo,
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
    //console.log(editedCommentBox);
    return editedCommentBox;
  }

  async deleteCommentBox(postId) {
    const deletedCommentBox = await this.commentBoxModel.delete(postId);
    return deletedCommentBox;
  }

  // 댓글 하나에 대한 동작들
  async addComment(postId, commentInfo) {
    const commentBox = await this.commentBoxModel.findByPostId(postId);
    const commentList = await commentBox.commentList;
    await commentList.push(commentInfo);
    return commentList;
  }

  async getComment(postId, commentId) {
    const commentBox = await this.commentBoxModel.findByPostId(postId);
    const commentList = await commentBox.commentList;

    for await (const commentIter of commentList) {
      if (commentIter._id == commentId) {
        return commentIter;
      }
    }
  }

  async deleteComment(postId, commentId) {
    const commentBox = await this.commentBoxModel.findByPostId(postId);
    const commentList = await commentBox.commentList;

    for (const i in commentList) {
      if (commentList[i]._id == commentId) {
        commentList.splice(i, 1);
        break;
      }
    }

    return commentList;
  }
}

const commentBoxService = new CommentBoxService(commentBoxModel);

export { commentBoxService };
