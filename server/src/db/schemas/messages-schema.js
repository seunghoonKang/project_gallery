import { Schema } from 'mongoose';

const MessagesSchema = new Schema(
  {
    conversationId: {
      type: Schema.Types.ObjectId,
      //required: true,
    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true },
  {
    collection: 'messages',
    versionKey: false,
  }
);

export { MessagesSchema };
