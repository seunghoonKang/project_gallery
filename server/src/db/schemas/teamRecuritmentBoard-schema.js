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
    career: {
      type: Number,
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
    collection: 'teamRecruitmentBoard',
    timestamps: true,
  }
);

export { TeamRecruitmentBoardSchema };
