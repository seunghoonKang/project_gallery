import { model } from 'mongoose';
import { ProjectProposalBoardSchema } from '../schemas/projectProposalBoard-schema';

const ProjectProposalBoard = model('proposals', ProjectProposalBoardSchema);

export class ProjectProposalBoardModel {
  // 프로젝트 제안 조회 - 오브젝트 아이디
  async findByTitle(titleId) {
    const user = await ProjectProposalBoard.findOne({ _id: titleId });
    return user;
  }

  // 모든 프로젝트 제안 조회
  async findAllProposal() {
    const allProposals = await ProjectProposalBoard.find({});
    return allProposals;
  }

  // 프로젝트 제안 생성
  async create(titleInfo) {
    const newProposal = await ProjectProposalBoard.create(titleInfo);
    return newProposal;
  }

  // 프로젝트 제안 수정
  async update({ titleId, update }) {
    const filter = { _id: titleId };
    const option = { returnOriginal: false };

    const updatedProposal = await ProjectProposalBoard.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedProposal;
  }

  // 프로젝트 제안 삭제
  async delete(titleId) {
    const proposal = await ProjectProposalBoard.findOneAndDelete({
      _id: titleId,
    });
    return proposal;
  }
}

const projectProposalBoardModel = new ProjectProposalBoardModel();

export { projectProposalBoardModel };
