import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [ newTask, setNewTask ] = useState({text: "", category: "All"});

  function onChange(e) {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(newTask)
    setNewTask({text: "", category: "Code"})
  }

  return (
    <form className="new-task-form" onSubmit={e => handleSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" onChange={e => onChange(e)} value={newTask.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={e => onChange(e)}>
          {categories.slice(1).map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
