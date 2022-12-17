import Task from "./Task/Task";

const TaskList = () => {
  state = {
    tasks: [
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
    ],
  };
  const handleDelete = (taskId) => {
    const tasks = this.state.tasks.filter((t) => t.id !== taskId);
    this.setState({ tasks });
    console.log("You Deleted Me.");
  };
  return <Task onDelete={this.handleDelete} taskList={taskList} />;
};

export default TaskList;
