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
      // for (let index = 0; index < array.length; index++) {
      //   tasks.map((task) => {tasks.id = index+1})
      // }

      

      
    );
  };

class editTask extends React.Component {
  constructor(props, taskId) {
    super(props);
    this.state = {
      task:tasks[taskId.target.id-1].task,
      value:tasks[taskId.target.id-1].value,
    }
    this.handleEdit = this.handleEdit.bind(this);
  }
}


  const handleEdit = () => {
    // this.editTask=this.editTask.bind(this);
    const newValue = prompt("Edit task", this.task);
    // const newValue = prompt("Edit task", tasks[taskId.target.id-1].task);
    this.setState({task: newValue})
    this.setState({value: newValue});
    // tasks[taskId.target.id-1].setState({task: newValue})
    // tasks[taskId.target.id-1].setState({value: newValue})
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
      <TaskList className="task-box" tasks={tasks} onDelete={handleDelete} onEdit={this.handleEdit}></TaskList>
    </div>
  );
};

export default Form;
