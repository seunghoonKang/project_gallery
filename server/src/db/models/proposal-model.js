import { model } from 'mongoose';
import { ProposalSchema } from '../schemas/proposal-schema';

const Proposal = model('proposals', ProposalSchema);

export class ProposalModel {
  async findByTitle(titleId) {
    const user = await Proposal.findOne({ _id: titleId });
    return user;
  }

  async createTitle(titleInfo) {
    const newProposal = await Proposal.create(titleInfo);
    return newProposal;
  }

  async deleteTitle(titleId) {
    const proposal = await Proposal.findOneAndDelete({ _id: titleId });
    return proposal;
  }
  async findAllProposal() {
    const allProposals = await Proposal.find({});
    return allProposals;
  }

  async update({ titleId, update }) {
    const filter = { _id: titleId };
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
