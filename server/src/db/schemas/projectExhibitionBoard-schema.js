import { Schema } from 'mongoose';

const ProjectExhibitionBoardSchema = new Schema(
  {
    nickName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
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
    images: {
      type: [String],
      required: false,
    },
    intro: {
      type: String,
      required: true,
    },
    updateLog: {
      type: String,
      required: false,
      default: '업데이트 내역이 없습니다.',
    },
    commentBoxId: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'exhibitions',
    timestamps: true,
    versionKey: false,
  }
);

export { ProjectExhibitionBoardSchema };
