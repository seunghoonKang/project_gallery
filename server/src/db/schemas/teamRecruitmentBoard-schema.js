import { Schema } from 'mongoose';

const TeamRecruitmentBoardSchema = new Schema(
  {
    nickName: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: false,
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
    collection: 'recruitments',
    timestamps: true,
    versionKey: false,
  }
);

export { TeamRecruitmentBoardSchema };
