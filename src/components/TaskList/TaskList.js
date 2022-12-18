import Task from "./Task";
import tasks from "../tasks";

const TaskList = () => {
  
  const handleDelete = (taskId) => {
    const task = tasks.filter((t) => t.id !== taskId);
    task = { tasks };
    console.log("You Deleted Me.");
  };

  return tasks.map((task) => (
    <Task
      key={task.id}
      task={task.task}
      value={task.task}
      onClick={handleDelete}
      //onEdit={handleEdit}
    />
  ));
};

export default TaskList;
