import { mongoose } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const Schema = mongoose.Schema;

autoIncrement.initialize(mongoose);

const ProposalSchema = new Schema(
  {
    nickName: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'proposals',
    timestamps: true,
  }
);
ProposalSchema.plugin(autoIncrement.plugin, {
  model: 'title',
  field: 'title_id',
  startAt: 1,
  incrementBy: 1,
});

export { ProposalSchema };
