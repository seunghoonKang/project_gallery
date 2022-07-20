import { Schema } from 'mongoose';

const TeamRecruitmentBoardSchema = new Schema(
  {
    nickName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
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
