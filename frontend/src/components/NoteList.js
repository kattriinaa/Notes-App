// src/components/NoteList.js
import NoteItem from './NoteItem';

export default function NoteList({ notes, onEdit, onDelete }) {
  return (
    <div className="note-list">
      {notes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
