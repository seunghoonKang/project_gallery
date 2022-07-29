import { Schema } from 'mongoose';

const ProjectProposalBoardSchema = new Schema(
  {
    nickName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tags: {
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
    versionKey: false,
  }
);

export { ProjectProposalBoardSchema };
