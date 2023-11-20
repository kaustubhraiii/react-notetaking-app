import React from "react";

const DisplayNote = (props) => {
  const handleDelete = () => {
    // Call the onDelete function passed as a prop with the note's title or any unique identifier
    props.onDelete && props.onDelete(props.title);
  };

  return (
    <div className="note">
      <p className="title">{props.title}</p>
      <p className="content">{props.content}</p>
      {props.onDelete && (
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
};

export default DisplayNote;
