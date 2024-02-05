import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

// I wrote this and it worked great now I get to break it all to pass the tests

function App() {

  const [ tasks, setTasks ] = useState(TASKS);
  function deleteTask(e) {
    setTasks(tasks.filter(task => task.text !== e.target.previousElementSibling.textContent));
  }

  const [ categories, setCategories ] = useState(CATEGORIES);

  const [ selected, setSelected ] = useState("All");
  function handleSelect(e) {
    e.target.parentNode.childNodes.forEach(child => child.className = "") //a simpler way could be to use a ternary inside the categories.map to see if category === selected
    setSelected(e.target.textContent);
    e.target.className = "selected";
  }

  function onTaskFormSubmit(newTask) {
    setTasks([
      ...tasks,
      newTask
    ]);
    
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selected={selected} handleSelect={handleSelect} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit}
      // tasks={tasks} setTasks={setTasks} 
      />
      <TaskList tasks={tasks} 
      // deleteTask={deleteTask} selected={selected} 
      />
    </div>
  );
}

export default App;
