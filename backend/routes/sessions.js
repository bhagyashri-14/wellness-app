const express = require('express');
const Session = require('../models/Session');
const auth = require('../middleware/auth');

const router = express.Router();

// Create or update session (auto-save or manual save)
router.post('/my-sessions/save', auth, async (req, res) => {
  try {
    const { id, title, tags, jsonUrl, isPublished } = req.body;
    let session;
    if (id) {
      session = await Session.findOneAndUpdate(
        { _id: id, owner: req.user.id },
        { title, tags, jsonUrl, isPublished, updatedAt: Date.now() },
        { new: true }
      );
    } else {
      session = await Session.create({
        title, tags, jsonUrl, isPublished: !!isPublished, owner: req.user.id
      });
    }
    res.json(session);
  } catch (err) {
    res.status(400).json({ message: 'Error: '+err.message });
  }
});

// Get all my sessions
router.get('/my-sessions', auth, async (req, res) => {
  const sessions = await Session.find({ owner: req.user.id });
  res.json(sessions);
});

// Get single session (for edit)
router.get('/my-sessions/:id', auth, async (req, res) => {
  const session = await Session.findOne({ _id: req.params.id, owner: req.user.id });
  if (!session) return res.status(404).json({ message: 'Not found' });
  res.json(session);
});

// Publish session (set isPublished true)
router.post('/my-sessions/:id/publish', auth, async (req, res) => {
  const session = await Session.findOneAndUpdate(
    { _id: req.params.id, owner: req.user.id },
    { isPublished: true, updatedAt: Date.now() },
    { new: true }
  );
  res.json(session);
});

// Delete session
router.delete('/my-sessions/:id', auth, async (req, res) => {
  await Session.deleteOne({ _id: req.params.id, owner: req.user.id });
  res.json({ message: 'Deleted' });
});

// Public sessions
router.get('/sessions', async (req, res) => {
  const sessions = await Session.find({ isPublished: true });
  res.json(sessions);
});

module.exports = router;