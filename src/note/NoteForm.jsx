import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setText("");
    onAddNote(text);
  }

  let validate;

  if (text.length === 0) {
    validate = true;
  } else {
    validate = false;
  }

  return (
    <div className="note-form">
      <input type="text" placeholder="Add note" value={text} onChange={handleChange} />
      <button onClick={handleClick} disabled={validate}>
        Add
      </button>
    </div>
  );
}
