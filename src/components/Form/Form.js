import React, {useState} from "react";
import CreateTaskInput from "./CreateTaskInput";
import tasks from "../tasks";
import TaskList from "../TaskList/TaskList";
import Task from "../TaskList/Task";

const Form = () => {
  const [taskValue, getTaskValue] = useState("");
  const handleInputTaskChange = (event) => {
    getTaskValue(event.target.value, console.log(taskValue))
  }
  const [idCount, updateIdCount] = useState(1);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      updateIdCount(idCount + 1);
      console.log("Radi")
      tasks.push({task: taskValue,
      id:idCount}); 
      console.log(tasks);
    }
  };
  return (<div>
  <CreateTaskInput className="task-input " type="text" placeholder="What do you plan to do?" value={taskValue} onChange={handleInputTaskChange} onKeyDown={handleKeyDown} />
  <TaskList></TaskList>
  </div>
  );
}

export default Form;
