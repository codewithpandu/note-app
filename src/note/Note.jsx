import { useState } from "react";

export default function Note({ note, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let component;

  function handleChangeText(e) {
    const newNote = { ...note, text: e.target.value };
    onChange(newNote);
  }

  if (isEditing) {
    component = (
      <div className="component-true">
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </div>
    );
  } else {
    component = (
      <>
        <span className="component-text">{note.text}</span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  function handleChangeDone(e) {
    const newNote = { ...note, done: e.target.checked };
    onChange(newNote);
  }

  return (
    <div className="note">
      <div className="note-component">
        <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
        <div className="component">{component}</div>
      </div>
      <button onClick={() => onDelete(note)}>Delete</button>
    </div>
  );
}
