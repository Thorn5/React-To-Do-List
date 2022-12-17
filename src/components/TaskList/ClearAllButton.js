const ClearAllButton = () => {
  onClear = () => {
    const taskList = (this.state.taskList = []);
    return taskList;
  };
  this.setState({ taskList });
  return (
    <button className="clearAllButton" onClick={onClear}>
      Clear All
    </button>
  );
};

export default ClearAllButton;
