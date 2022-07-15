import { projectExhibitionBoardModel } from '../db';

class ProjectExhibitionBoardService {
  constructor(projectExhibitionBoardModel) {
    this.projectExhibitionBoardModel = projectExhibitionBoardModel;
  }

  async addPost(postInfo) {
    const newPost = await this.projectExhibitionBoardModel.create(postInfo);
    return newPost;
  }

  async getPosts() {
    const posts = await this.projectExhibitionBoardModel.getAll();
    return posts;
  }

  async getPostById(postId) {
    const post = await this.projectExhibitionBoardModel.findById(postId);
    return post;
  }

  async editPost(postId, toUpdate) {
    let post = await this.projectExhibitionBoardModel.findById(postId);

    if (!post) {
      throw new Error('존재하지 않는 게시글입니다.');
    }

    post = await this.projectExhibitionBoardModel.update({
      postId,
      update: toUpdate,
    });

    return post;
  }
}

const projectExhibitionBoardService = new ProjectExhibitionBoardService(
  projectExhibitionBoardModel
);

export { projectExhibitionBoardService };
