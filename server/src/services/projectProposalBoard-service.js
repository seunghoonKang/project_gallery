import { projectProposalBoardModel } from '../db';

class ProjectProposalBoardService {
  constructor(projectProposalBoardModel) {
    this.projectProposalBoardModel = projectProposalBoardModel;
  }

  // 프로젝트 제안 정보 조회
  async getProposal(titleId) {
    const proposal = await this.projectProposalBoardModel.findByTitle({
      _id: titleId,
    });
    return proposal;
  }

  // 프로젝트 제안 전체 조회
  async getProposals() {
    const proposals = await this.projectProposalBoardModel.findAllProposal();
    return proposals;
  }

  // 프로젝트 제안 추가
  async addProposal(titleInfo) {
    const newProposal = await this.projectProposalBoardModel.create(titleInfo);
    return newProposal;
  }

  // 프로젝트 제안 수정
  async setProposal(titleId, toUpdate) {
    const editedProposal =
      await this.proposalprojectProposalBoardModelModel.update({
        _id: titleId,
        update: toUpdate,
      });

    return editedProposal;
  }

  // 프로젝트 제안 삭제
  async deleteProposal(titleId) {
    const deletedProposal = await this.projectProposalBoardModel.delete({
      _id: titleId,
    });

    if (!deletedProposal) {
      throw new Error('삭제에 실패했습니다. 다시 한 번 확인해 주세요.');
    }
    return deletedProposal;
  }
}

const projectProposalBoardService = new ProjectProposalBoardService(
  projectProposalBoardModel
);

export { projectProposalBoardService };
