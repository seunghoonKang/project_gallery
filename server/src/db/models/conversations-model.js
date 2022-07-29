import { model } from 'mongoose';
import { ConversationSchema } from '../schemas/conversations-schema';

const ConversationBoard = model('ConversationBoard', ConversationSchema);

class ConversationBoardModel {
  async create(members) {
    const newConversation = await ConversationBoard.create(members);
    return newConversation;
  }

  async findAll(userId) {
    const findConversation = await ConversationBoard.find({});
    return findConversation;
  }

  async findById(postId) {
    const post = await ProjectExhibitionBoard.findOne({ _id: postId });
    return post;
  }

  async findByNickName(nickName) {
    const posts = await ProjectExhibitionBoard.find({ nickName: nickName });
    return posts;
  }

  async update({ postId, update }) {
    const filter = { _id: postId };
    const option = { returnOriginal: false };

    const updatedPost = await ProjectExhibitionBoard.findOneAndUpdate(
      filter,
      update,
      option
    );

    return updatedPost;
  }

  async delete(postId) {
    const post = await ProjectExhibitionBoard.findOneAndDelete({ _id: postId });
    return post;
  }
}

const conversationBoardModel = new ConversationBoardModel();

export { conversationBoardModel };
