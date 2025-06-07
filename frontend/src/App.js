import { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote
} from './services/notesService';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await getNotes();
    setNotes(res.data);
  };

  const handleSave = async (note) => {
    if (editingNote) {
      const res = await updateNote(editingNote.id, note);
      setNotes(notes.map(n => n.id === editingNote.id ? res.data : n));
    } else {
      const res = await createNote(note);
      setNotes([...notes, res.data]);
    }
    setEditingNote(null);
    setShowForm(false);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEdit = (note) => {
    setEditingNote(note);
    setShowForm(true);
  };

  const cancelEdit = () => {
    setEditingNote(null);
    setShowForm(false);
  };

  const handleAddClick = () => {
    if (showForm && !editingNote) {
      setShowForm(false);
    } else {
      setEditingNote(null);
      setShowForm(true);
    }
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Notes App</h1>

      <input
        type="text"
        className="search-input"
        placeholder="Пошук нотаток за заголовком..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button className="add-button" onClick={handleAddClick}>
        {showForm && !editingNote ? 'Закрити форму' : '+ Додати нотатку'}
      </button>

      {showForm && (
        <NoteForm
          onSave={handleSave}
          selectedNote={editingNote}
          onCancel={cancelEdit}
        />
      )}

      <NoteList notes={filteredNotes} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
