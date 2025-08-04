const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  title: String,
  tags: [String],
  jsonUrl: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isPublished: { type: Boolean, default: false },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});

// FIX: Only register the model if it does not already exist
module.exports = mongoose.models.Session || mongoose.model('Session', SessionSchema);