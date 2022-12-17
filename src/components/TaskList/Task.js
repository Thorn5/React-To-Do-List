const Task = (prop) => {
  return (
    <div className="task">
      <input type="text" value={prop} readOnly />
      <button className="deleteButton">Delete</button>
      <button className="editButton">Edit</button>
    </div>
  );
}

export default Task;