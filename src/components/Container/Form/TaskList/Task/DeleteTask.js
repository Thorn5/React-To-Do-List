import React from "react";

const DeleteTask = (prop) => {
  return (
    <button onClick={prop.onDelete} className="deleteButton">
      Delete
    </button>
  );
};

export default DeleteTask;
