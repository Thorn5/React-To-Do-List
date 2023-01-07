import React, { useState, useEffect } from "react";
import CreateTaskInput from "./CreateTaskInput";
//import tasks from "../tasks";
import TaskList from "../TaskList/TaskList";
import ClearAllButton from "./ClearAllButton";

const Form = () => {
  let tasksArrayJSON;
  const [taskValue, getTaskValue] = useState("");
  const [tasksArray, newTasks] = useState([]);
  const [idCount, updateIdCount] = useState(1);
  let oldTasksJSON = localStorage.getItem("Tasks");
  useEffect(() => {
    if (oldTasksJSON !== null) {
      let oldTasks = JSON.parse(oldTasksJSON);

      newTasks(oldTasks);
    }
    tasksArrayJSON = JSON.stringify(tasksArray);
    localStorage.setItem("Tasks", tasksArrayJSON);
  }, []);

  const handleInputTaskChange = (event) => {
    getTaskValue(event.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (taskValue == "") {
        alert("Please Enter a Task");
      } else {
        updateIdCount(idCount + 1);
        tasksArray.push({ task: taskValue, id: idCount });
        tasksArrayJSON = JSON.stringify(tasksArray);
        localStorage.setItem("Tasks", tasksArrayJSON);
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
    const newArray = tasksArray.filter(
      (task) => task !== tasksArray[deleteIndex]
    );
    tasksArrayJSON = JSON.stringify(newArray);
    localStorage.setItem("Tasks", tasksArrayJSON);
  };
  const handleClearAll = () => {
    newTasks([]);
    const newArray = [];
    tasksArrayJSON = JSON.stringify(newArray);
    localStorage.setItem("Tasks", tasksArrayJSON);
  };

  const handleEdit = (taskId) => {
    const stringPosition = tasksArray.findIndex(
      (task) => task.id == taskId.target.id
    );
    const newValue = prompt("Edit task", tasksArray[stringPosition].task);
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
    const newArray = tasksArray.map((task) => {
      if (task.id == taskId.target.id) {
        task.value = newValue;
        task.task = newValue;
        return task;
      } else {
        return task;
      }
    });
    tasksArrayJSON = JSON.stringify(newArray);
    localStorage.setItem("Tasks", tasksArrayJSON);
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
