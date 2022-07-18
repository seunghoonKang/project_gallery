import { mongoose } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const Schema = mongoose.Schema;

autoIncrement.initialize(mongoose);

const CommentSchema = new Schema(
  {
    nickName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    rate: Number,
    comment: String,
  },
  {
    collection: 'comments',
    timestamps: true,
    versionKey: false,
  }
);

CommentSchema.plugin(autoIncrement.plugin, {
  model: 'comments',
  field: 'comment_id',
  startAt: 1,
  incrementBy: 1,
});

export { CommentSchema };
