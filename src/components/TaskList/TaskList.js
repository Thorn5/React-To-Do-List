import Task from "./Task";

const TaskList = (prop) => {
  //prop.tasks.forEach((task) => {
  //console.log(task.id);
  //});

  return prop.tasks.map((task) => (
    <Task
      key={task.id}
      task={task.task}
      id={task.id}
      value={task.task}
      onDelete={prop.onDelete}
      //onEdit={handleEdit}
    />
  ));
};

export default TaskList;
