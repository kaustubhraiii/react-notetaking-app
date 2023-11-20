// Note.jsx
import React, { useState } from "react";
import DisplayNote from "./DisplayNote";
import AddNote from "./AddNote";

const Note = () => {
  const [notes, setNotes] = useState([]);

  const createNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (title) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.title !== title));
  };

  return (
    <div className="container">
      <AddNote onCreate={createNote} />
      <div className="note-container">
        {notes.map((note, index) => (
          <DisplayNote
            key={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Note;
