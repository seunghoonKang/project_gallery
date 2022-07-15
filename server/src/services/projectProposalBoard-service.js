import { projectProposalBoardModel } from '../db';

class ProjectProposalBoardService {
  constructor(projectProposalBoardModel) {
    this.projectProposalBoardModel = projectProposalBoardModel;
  }

  // 프로젝트 제안 정보 조회
  async getProposal(titleId) {
    const proposals = await this.projectProposalBoardModel.findByTitle({
      _id: titleId,
    });
    return proposals;
  }

  // 프로젝트 제안 추가
  async addProposal(titleInfo) {
    const createdProposal = await this.projectProposalBoardModel.insertTitle(
      titleInfo
    );
    return createdProposal;
  }

  // 프로젝트 제안 삭제
  async deleteProposal(titleId) {
    const proposal = await this.projectProposalBoardModel.deleteTitle({
      _id: titleId,
    });

    if (!proposal) {
      throw new Error('삭제에 실패했습니다. 다시 한 번 확인해 주세요.');
    }
    return proposal;
  }

  // 프로젝트 제안 수정
  async setProposal(titleId, toUpdate) {
    const proposal = await this.proposalprojectProposalBoardModelModel.update({
      _id: titleId,
      update: toUpdate,
    });

    return proposal;
  }
}

const projectProposalBoardService = new ProjectProposalBoardService(
  projectProposalBoardModel
);

export { projectProposalBoardService };
