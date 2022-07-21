import { model } from 'mongoose';
import { ProjectExhibitionBoardSchema } from '../schemas/projectExhibitionBoard-schema';

const ProjectExhibitionBoard = model(
  'projectExhibitionBoards',
  ProjectExhibitionBoardSchema
);

class ProjectExhibitionBoardModel {
  async create(postInfo) {
    const newPost = await ProjectExhibitionBoard.create(postInfo);
    return newPost;
  }

  async getAll() {
    const posts = await ProjectExhibitionBoard.find({});
    return posts;
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

const projectExhibitionBoardModel = new ProjectExhibitionBoardModel();

export { projectExhibitionBoardModel };
