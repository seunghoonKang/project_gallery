import { proposalModel } from '../db';

class ProposalService {
  constructor(proposalModel) {
    this.proposalModel = proposalModel;
  }

  async getProposal(titleId) {
    const proposals = await this.proposalModel.findByTitle({ _id: titleId });
    return proposals;
  }

  async addProposal(titleInfo) {
    const createdProposal = await this.proposalModel.insertTitle(titleInfo);
    return createdProposal;
  }

  //proposal 정보 삭제
  async deleteProposal(titleId) {
    const proposal = await this.proposalModel.deleteTitle({ _id: titleId });

    if (!proposal) {
      throw new Error('삭제에 실패했습니다. 다시 한 번 확인해 주세요.');
    }
    return proposal;
  }

  async setProposal(titleId, toUpdate) {
    const titleId = { _id: titleId };
    const proposal = await this.proposalModel.update({
      titleId,
      update: toUpdate,
    });

    return proposal;
  }
}

const proposalService = new ProposalService(proposalModel);

export { proposalService };
