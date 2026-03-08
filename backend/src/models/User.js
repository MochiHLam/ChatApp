const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: String,
    googleId: String,
    githubId: String,
    authMethods: [{ type: String, enum: ['email', 'google', 'github'] }],
    isEmailVerified: { type: Boolean, default: false },
    gender: String,
    dateOfBirth: String,
    avatarUrl: String,
    bio: String,
    isOnBoarded: { type: Boolean, default: false },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    settings: {
      theme: String,
      language: String,
      privacy: { type: String, enum: ['public', 'private'] }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
