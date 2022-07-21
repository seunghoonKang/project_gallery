import { Schema } from 'mongoose';

const CommentBoxSchema = new Schema(
  {
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'users',
    //   required: true,
    // },
    postId: {
      type: String,
      required: false,
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
    timestamps: true,
    versionKey: false,
  }
);

export { CommentBoxSchema };
