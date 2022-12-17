import React, {useState} from "react";
import CreateTaskInput from "./CreateTaskInput";
import tasks from "../tasks";

const Form = () => {
  const [taskValue, getTaskValue] = useState("");
  const handleInputTaskChange = (event) => {
    getTaskValue(event.target.value, console.log(taskValue))
  }
 const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log("Radi")
      tasks.push({task: taskValue}); 
      console.log(tasks);
    }
  };
  return (
  <CreateTaskInput className="task-input " type="text" placeholder="What do you plan to do?" value={taskValue} onChange={handleInputTaskChange} onKeyDown={handleKeyDown} />
  );
}

export default Form;
