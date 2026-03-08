const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: String,
    media: [{ url: String, type: { type: String, enum: ['image', 'video'] } }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    commentsCount: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
