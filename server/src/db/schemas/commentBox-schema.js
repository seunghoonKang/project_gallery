import { Schema } from 'mongoose';

const CommentBoxSchema = new Schema(
  {
    postId: {
      type: String,
      required: true,
    },
    commentList: {
      type: [
        new Schema({
          nickName: { type: String, required: true },
          comment: { type: String, required: true },
        }),
      ],
      required: true,
    },
  },
  {
    collection: 'comments',
    versionKey: false,
  }
);

export { CommentBoxSchema };
