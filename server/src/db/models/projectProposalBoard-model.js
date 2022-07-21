import { model } from 'mongoose';
import { ProjectProposalBoardSchema } from '../schemas/projectProposalBoard-schema';

const ProjectProposalBoard = model('proposals', ProjectProposalBoardSchema);

export class ProjectProposalBoardModel {
  // 프로젝트 제안 생성
  async create(postInfo) {
    const newProposal = await ProjectProposalBoard.create(postInfo);
    return newProposal;
  }

  // 모든 프로젝트 제안 조회
  async getAll() {
    const proposals = await ProjectProposalBoard.find({});
    return proposals;
  }

  // 프로젝트 제안 조회 - 오브젝트 아이디
  async findById(postId) {
    const proposal = await ProjectProposalBoard.findOne({ _id: postId });
    return proposal;
  }

  // 프로젝트 제안 수정
  async update({ postId, update }) {
    const filter = { _id: postId };
    const option = { returnOriginal: false };

    const updatedProposal = await ProjectProposalBoard.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedProposal;
  }

  // 프로젝트 제안 삭제
  async delete(postId) {
    const proposal = await ProjectProposalBoard.findOneAndDelete({
      _id: postId,
    });
    return proposal;
  }
}

const projectProposalBoardModel = new ProjectProposalBoardModel();

export { projectProposalBoardModel };
