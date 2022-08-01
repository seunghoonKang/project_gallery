import { Schema } from 'mongoose';

const ConversationSchema = new Schema(
  {
    members: [
      {
        type: Schema.Types.ObjectId,
        required: true,
      },
    ],
  },
  {
    collection: 'conversation',
    versionKey: false,
  }
);

export { ConversationSchema };
