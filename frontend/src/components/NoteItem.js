// src/components/NoteItem.js
export default function NoteItem({ note, onEdit, onDelete }) {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div>
        <button onClick={() => onEdit(note)}>Edit</button>
        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
}
