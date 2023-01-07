import React, { useState } from "react";
import CreateTaskInput from "./CreateTaskInput";
//import tasks from "../tasks";
import TaskList from "../TaskList/TaskList";
import ClearAllButton from "./ClearAllButton";

const Form = () => {
  const [taskValue, getTaskValue] = useState("");
  const [tasksArray, newTasks] = useState([]);
  const handleInputTaskChange = (event) => {
    getTaskValue(event.target.value);
  };
  const [idCount, updateIdCount] = useState(1);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (taskValue == "") {
        alert("Please Enter a Task");
      } else {
        updateIdCount(idCount + 1);
        tasksArray.push({ task: taskValue, id: idCount });
        getTaskValue("");
      }
    }
  };
  const handleDelete = (taskId) => {
    let deleteIndex = "";
    tasksArray.forEach((task) => {
      if (task.id == taskId.target.id) {
        deleteIndex = tasksArray.indexOf(task);
      }
    });
    newTasks(tasksArray.filter((task) => task !== tasksArray[deleteIndex]));
  };
  const handleClearAll = () => {
    newTasks([]);
  };

  const handleEdit = (taskId) => {
    console.log("+++++++++++++++++++++++++++++++++");
    console.log("task list: ", tasksArray);
    console.log("target ID: ", taskId.target.id);
    const stringPosition = tasksArray.findIndex(
      (task) => task.id == taskId.target.id
    );
    console.log("array position: ", stringPosition);
    console.log("task string: ", tasksArray[stringPosition].task);
    const newValue = prompt("Edit task", tasksArray[stringPosition].task);
    console.log("new value: ", newValue);
    console.log("+++++++++++++++++++++++++++++++++");
    newTasks(
      tasksArray.map((task) => {
        if (task.id == taskId.target.id) {
          task.value = newValue;
          task.task = newValue;
          return task;
        } else {
          return task;
        }
      })
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
      <TaskList
        className="task-box"
        tasks={tasksArray}
        onDelete={handleDelete}
        onEdit={handleEdit}
      ></TaskList>
      <ClearAllButton onClearAll={handleClearAll} />
    </div>
  );
};

export default Form;
