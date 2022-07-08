import { model } from 'mongoose';
import { ProposalSchema } from '../schemas/proposal-schema';

const Proposal = model('proposals', ProposalSchema);

export class ProposalModel {
  async findByNickname(nickName) {
    const user = await Proposal.findOne({ nickName });
    return user;
  }

  async insertTitle(title) {
    const createdTitle = await Proposal.create(title);
    return createdTitle;
  }

  async deleteTitle(title) {
    const { deletedCount } = await Proposal.deleteOne({ title });
    return deletedCount;
  }
  async findAllProposal() {
    const allProposals = await Proposal.find({});
    return allProposals;
  }

  async update({ nickName, update }) {
    const filter = { nickName: nickName };
    const option = { returnOriginal: false };

    const updatedProposal = await Proposal.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedProposal;
  }
}

const proposalModel = new ProposalModel();

export { proposalModel };
