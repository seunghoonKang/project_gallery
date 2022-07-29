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
      default: [
        'https://images.unsplash.com/photo-1581431886211-6b932f8367f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      ],
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
      required: false,
    },
  },
  {
    collection: 'exhibitions',
    timestamps: true,
    versionKey: false,
  }
);

export { ProjectExhibitionBoardSchema };
