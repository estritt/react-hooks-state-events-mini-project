import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, selected }) {
  // console.log(document.querySelector(".selected"))
  if (!selected) { return ( //this is stupid stuff i have to do to get the tests to pass
    <div className="tasks">
      {tasks
      .map(task => <Task key={uuid()} text={task.text} category={task.category} />)}
    </div>
  )} else {
  return (
    <div className="tasks">
      {tasks.filter(task => selected === "All" ? true : task.category === selected)
      .map(task => <Task key={uuid()} text={task.text} category={task.category} />)}
    </div>
  );}
}

export default TaskList;
