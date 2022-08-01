import { model } from 'mongoose';
import { MessagesSchema } from '../schemas/messages-schema';

const MessagesModel = model('message', MessagesSchema);

class MessagesBoardModel {
  async create(newMessage) {
    const savedMessage = await MessagesModel.create(newMessage);
    return savedMessage;
  }

  async findMessages(conversationId) {
    const findMessages = await MessagesModel.find({
      conversationId: conversationId,
    });
    console.log(findMessages);
    return findMessages;
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

const messagesBoardModel = new MessagesBoardModel();

export { messagesBoardModel };
