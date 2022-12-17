import DeleteTask from "./DeleteTask";

const Task = (prop) => {
  return <DeleteTask task={prop.task} onDelete={prop.onDelete} />;
};

export default Task;
