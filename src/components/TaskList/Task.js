const Task = (prop) => {
  return (
    <div className="task">
      <input type="text" value={prop.value} readOnly />
      <button className="deleteButton" onClick={prop.onClick} >
        Delete
      </button>
      <button className="editButton" onClick={prop.onClick}>
        Edit
      </button>
    </div>
  );
};

export default Task;
