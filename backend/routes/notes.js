const express = require('express');
const { readNotes, writeNotes } = require('../utils/fileHandler');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// GET /notes
router.get('/', (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

// POST /notes
router.post('/', (req, res) => {
  const { title, content } = req.body;
  const now = new Date();
  const newNote = {
    id: uuidv4(),
    title,
    content,
    createdAt: now,
    updatedAt: now
  };
  const notes = readNotes();
  notes.push(newNote);
  writeNotes(notes);
  res.status(201).json(newNote);
});

// PUT /notes/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const notes = readNotes();
  const noteIndex = notes.findIndex(note => note.id === id);
  if (noteIndex === -1) return res.status(404).json({ message: 'Note not found' });
  notes[noteIndex] = {
    ...notes[noteIndex],
    title,
    content,
    updatedAt: new Date()
  };
  writeNotes(notes);
  res.json(notes[noteIndex]);
});

// DELETE /notes/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  let notes = readNotes();
  notes = notes.filter(note => note.id !== id);
  writeNotes(notes);
  res.status(204).end();
});

module.exports = router;
