const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
  {
    chatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat', required: true },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['text', 'image', 'video', 'call'] },
    content: String,
    callStatus: {
      type: String,
      enum: ['missed', 'completed', 'declined', 'cancelled', 'no-answer']
    },
    callDuration: Number,
    callRoomId: String
  },
  { timestamps: true }
);

MessageSchema.index({ chatId: 1, createdAt: -1 });

module.exports = mongoose.model('Message', MessageSchema);
