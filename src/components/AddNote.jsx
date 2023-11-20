import React from "react";
import { FaPlus } from "react-icons/fa";

const AddNote = () => {
  return (
    <div className="add-note-container">
      <div className="add-note">
        <input
          type="text"
          name="title "
          placeholder="Enter note title"
          className="form-title"
        />
        <textarea
          name="content"
          placeholder="Enter Note Content Here"
          rows="5"
          className="form-content"
        />
        <button className="submit-button">
          <FaPlus /> Submit Note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
