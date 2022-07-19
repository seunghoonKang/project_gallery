import { Schema } from 'mongoose';

const CommentSchema = new Schema(
  {
    postId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    commentList: {
      type: [
        new Schema(
          {
            nickName: { type: String, required: false },
            comment: { type: String, required: true },
          },
          {
            __id: true,
          }
        ),
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

export { CommentSchema };

// const orderedDate = createdAt.sort(
//   (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
// );
