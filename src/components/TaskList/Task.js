//import { FaEllipsisH } from "react-icons/fa";
const Task = (prop) => {
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
  return (<li className="task">
  <label>
    <input onChange={prop.onChange} className="checkbox" type="checkbox"></input>
    <p className="strikethrough">{prop.value}</p>
  </label>
  <div className="settings">
        <div className="uil uil-ellipsis-h">...</div>
        <ul class="task-menu">
            <li><button className="deleteButton" onClick={prop.onDelete} id={prop.id}>Delete</button></li>
            <li><button className="editButton" onClick={prop.onClick}>Edit</button></li>
        </ul>
  </div>
 </li>)
};

export default Task;

{/* (
     <div className="task">
       <input type="text" value={prop.value} readOnly />
       <button className="deleteButton" onClick={prop.onDelete} id={prop.id}>
          Delete
       </button>
       <button className="editButton" onClick={prop.onClick}>
         Edit
       </button>
     </div>
   ); */}