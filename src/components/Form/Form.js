import React, { useState } from "react";
import CreateTaskInput from "./CreateTaskInput";
import tasks from "../tasks";
import TaskList from "../TaskList/TaskList";

const Form = () => {
  const [taskValue, getTaskValue] = useState("");
  let tasks2 = tasks;
  const [tasksArray, newTasks] = useState(tasks2);
  const handleInputTaskChange = (event) => {
    getTaskValue(event.target.value);
  };
  const [idCount, updateIdCount] = useState(1);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      updateIdCount(idCount + 1);
      tasks.push({ task: taskValue, id: idCount });
    }
  };
  const handleDelete = (taskId) => {
    newTasks(
      tasks.splice(
        tasks.findIndex((task) => task.id == taskId.target.id),
        1
      )
    );
  };
  return (
    <div>
      <CreateTaskInput
        className="task-input "
        type="text"
        placeholder="What do you plan to do?"
        value={taskValue}
        onChange={handleInputTaskChange}
        onKeyDown={handleKeyDown}
        id={idCount}
      />
      <TaskList tasks={tasks} onDelete={handleDelete}></TaskList>
    </div>
  );
};

export default Form;
