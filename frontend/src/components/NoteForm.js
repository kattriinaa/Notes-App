// src/components/NoteForm.js
import { useState, useEffect } from 'react';

export default function NoteForm({ onSave, selectedNote, onCancel }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    }
  }, [selectedNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const note = {
      title,
      content,
    };

    onSave(note);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button type="submit">{selectedNote ? 'Update' : 'Create'}</button>
      {selectedNote && <button onClick={onCancel}>Cancel</button>}
    </form>
  );
}
