import Task from "./Task/Task";

const TaskList = () => {
  let tasks = [
    {
      id: 1,
      text: "hello there",
      checked: false,
    },
    {
      id: 2,
      text: "general kenobi",
      checked: false,
    },
  ];
  const handleDelete = (taskId) => {
    const tasks = tasks.filter((t) => t.id !== taskId);
    tasks = { tasks };
  };
  return tasks.map((task) => (
    <Task key={task.id} task={task} onDelete={handleDelete} />
  ));
};

export default TaskList;
