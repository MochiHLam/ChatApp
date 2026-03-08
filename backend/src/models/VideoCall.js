const mongoose = require('mongoose');

const VideoCallSchema = new mongoose.Schema(
  {
    roomId: { type: String, required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    invitedParticipants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    startedAt: Date,
    endedAt: Date,
    status: { type: String, enum: ['active', 'ended'] }
  },
  { timestamps: true }
);

module.exports = mongoose.model('VideoCall', VideoCallSchema);
