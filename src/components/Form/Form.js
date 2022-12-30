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
      getTaskValue("")
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


  // const [setString] = useState(tasks2);
  const handleEdit = (taskId) => {
    // setString(
console.log("+++++++++++++++++++++++++++++++++");
console.log("task list: ", tasks);
console.log("target ID: ", taskId.target.id)
const stringPosition = tasks.findIndex((task) => task.id == taskId.target.id)
console.log("array position: ", stringPosition);
console.log("task string: ", tasks[stringPosition].task);
const newValue = prompt("Edit task", tasks[stringPosition].task);
console.log("new value: ",newValue);
console.log("+++++++++++++++++++++++++++++++++");

      // const newValue = prompt("Edit task", this.task);
      // const newValue = prompt("Edit task", tasks[taskId.target.id-1].task);
      //this.setState({ task: newValue })
      //this.setState({ value: newValue });
      // tasks[taskId.target.id-1].setState({task: newValue})
      // tasks[taskId.target.id-1].setState({value: newValue})
    // );
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
      <TaskList className="task-box" tasks={tasks} onDelete={handleDelete} onEdit={handleEdit}></TaskList>
    </div>
  );
};

export default Form;
