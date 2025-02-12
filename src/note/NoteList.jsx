import Note from "./Note";

export default function NoteList({ notes, onChange, onDelete }) {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <h3>Data Kosong</h3>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <Note note={note} onChange={onChange} onDelete={onDelete}></Note>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
