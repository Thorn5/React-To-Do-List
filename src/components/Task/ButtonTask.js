import React from "react";

const ButtonTask = (prop) => {
  onDelete = (taskId) => {
    const taskList = this.state.taskList.filter((t) => t.id !== taskId);
    this.setState({ taskList });
  };
  return (
    <button
      onClick={() => {
        this.props.onDelete(this.props.task.id);
        console.log("clicked");
      }}
      className="deleteButton"
    >
      Delete
    </button>
  );
};

export default ButtonTask;
