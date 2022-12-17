import Task from "./Task";

const TaskList = (prop) => {
  let tasks = prop.tasks;
  const handleDelete = (taskId) => {
    const tasks = tasks.filter((t) => t.id !== taskId);
    tasks = { tasks };
    console.log("You Deleted Me.");
  };
  return tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      onDelete={handleDelete}
      onEdit={handleEdit}
    />
  ));
};

export default TaskList;
