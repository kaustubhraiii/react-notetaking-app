import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddNote = (props) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(note);
    props.onCreate(note);
    setNote({ title: "", content: "" }); // Reset the input fields
  };

  return (
    <div className="add-note-container">
      <form className="add-note" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter note title"
          className="form-title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Enter Note Content Here"
          rows="5"
          className="form-content"
          onChange={handleChange}
          value={note.content}
        />
        <button type="submit" className="submit-button">
          <FaPlus /> Submit Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
