import { Schema } from 'mongoose';

const ProjectProposalBoardSchema = new Schema(
  {
    nickName: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    tag: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'proposals',
    timestamps: true,
  }
);

export { ProjectProposalBoardSchema };
