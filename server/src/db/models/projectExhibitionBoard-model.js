import { model } from 'mongoose';
import { ProjectExhibitionBoardSchema } from '../schemas/projectExhibitionBoard-schema';

const ProjectExhibitionBoard = model(
  'projectExhibitionBoards',
  ProjectExhibitionBoardSchema
);

class ProjectExhibitionBoardModel {
  async create(projectInfo) {
    const newPost = await ProjectExhibitionBoard.create(projectInfo);
    return newPost;
  }

  async getAll() {
    const posts = await ProjectExhibitionBoard.find({});
    return posts;
  }

  async findById(projectId) {
    const post = await ProjectExhibitionBoard.findOne({ _id: projectId });
    return post;
  }

  async findByNickName(nickName) {
    const posts = await ProjectExhibitionBoard.find(nickName);
    return posts;
  }

  async update({ postId, update }) {
    const filter = { _id: postId };
    const option = { returnOriginal: false };

    const updatedPost = await ProjectExhibitionBoard.findByIdAndUpdate(
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
