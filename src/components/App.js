import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selected, setSelected] = useState("All");
  function handleSelect(string) {
    setSelected(string);
  }
  const [tasks,setTasks] = useState(TASKS)

  function onTaskFormSubmit(task){
    // TASKS.push(task)
    setTasks([...tasks, task])
    console.log(TASKS)
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleSelect={handleSelect} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} selected={selected} />
    </div>
  );
}

export default App;
