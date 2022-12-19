import Task from "./Task";

const TaskList = (prop) => {
  //prop.tasks.forEach((task) => {
  //console.log(task.id);
  //});

  return (<div className={prop.className}>{prop.tasks.map((task) => (
    <Task
      key={task.id}
      task={task.task}
      id={task.id}
      value={task.task}
      onDelete={prop.onDelete}
      //onEdit={handleEdit}
    />
  ))}</div>)
};

export default TaskList;
