const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    thought: [{
      type: Schema.Types.ObjectId,
      ref: 'thought'
    }]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

const User = model('user', userSchema);

module.exports = User;
