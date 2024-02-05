import React from "react";

function Task({ text, category }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={e => e.target.parentNode.remove()} className="delete">X</button>
    </div>
  );
}

export default Task;
