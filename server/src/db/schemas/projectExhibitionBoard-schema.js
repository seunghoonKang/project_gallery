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
    collection: 'exhibitions',
    timestamps: true,
    versionKey: false,
  }
);

export { ProjectExhibitionBoardSchema };
