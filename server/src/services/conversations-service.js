import { conversationBoardModel } from '../db';

class ConversationService {
  constructor(conversationBoardModel) {
    this.conversationBoardModel = conversationBoardModel;
  }

  //conversation 저장하기
  async newConversation(members) {
    console.log(members);
    const saveConversation = await this.conversationBoardModel.create(members);
    return saveConversation;
  }

  async getConversation(userId) {
    const getConversation = await this.conversationBoardModel.findAll(userId);
    return getConversation;
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
      if (commentIter._id === commentId) {
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

const conversationService = new ConversationService(conversationBoardModel);

export { conversationService };
