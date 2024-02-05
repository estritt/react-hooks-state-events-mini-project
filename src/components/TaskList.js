import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, deleteTask, selected }) {

  const selectedCategory = document.querySelector(".selected") ? document.querySelector(".selected").textContent : "All"
  console.log(selectedCategory)
  
  return (
    <div className="tasks">
      {
        tasks.filter(task => (selectedCategory === "All") ? true : (task.category === selectedCategory))
        .map(task => <Task key={uuid()} text={task.text} category={task.category} deleteTask={deleteTask} />)
      }
    </div>
  );
}

export default TaskList;
