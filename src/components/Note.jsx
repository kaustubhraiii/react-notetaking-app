import React, { useState } from "react";
import DisplayNote from "./DisplayNote";
import AddNote from "./AddNote";

const Note = () => {
  const [notes, setNotes] = useState([]);

  const createNote = (note) => {
    console.log(note);
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <div className="container">
      <AddNote onCreate={createNote} />
      <div className="note-container">
        {notes &&
          notes.map((note) => (
            <DisplayNote title={note.title} content={note.content} />
          ))}
      </div>
    </div>
  );
};

export default Note;
