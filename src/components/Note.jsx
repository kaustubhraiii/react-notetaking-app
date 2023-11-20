import React from "react";
import DisplayNote from "./DisplayNote";

const Note = () => {
  return (
    <div className="note-container">
      <DisplayNote
        title="Sample Note 1"
        content="This is content for sample note 1"
      />
      <DisplayNote
        title="Sample Note 2"
        content="This is content for sample note 2"
      />
      <DisplayNote
        title="Sample Note 3"
        content="This is content for sample note 3"
      />
      <DisplayNote
        title="Sample Note 4"
        content="This is content for sample note 4"
      />
      <DisplayNote
        title="Sample Note 5"
        content="This is content for sample note 5"
      />

      <DisplayNote
        title="Sample Note 5"
        content="This is content for sample note 5"
      />
    </div>
  );
};

export default Note;
