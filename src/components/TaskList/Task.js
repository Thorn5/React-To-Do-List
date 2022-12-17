const Task = (prop) => {
  return (
    <div className="task">
      <input type="text" value={prop} readOnly />
      <button className="deleteButton" onClick={prop.handleDelete}>Delete</button>
      <button className="editButton" onClick={prop.handleEdit}>Edit</button>
    </div>
  );
}

export default Task;