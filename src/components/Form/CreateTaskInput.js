import React  from "react";
const CreateTaskInput = (prop) => {
  return (<input className={prop.className} type={prop.type} placeholder={prop.placeholder} value={prop.value} onChange={prop.onChange} onKeyDown={prop.onKeyDown}></input>);
}

export default CreateTaskInput;