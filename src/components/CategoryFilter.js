import React from "react";

function CategoryFilter({ categories, handleSelect }) {

  function handleClick(e) {
    const children = e.target.parentNode.children
    for (let i=0; i<children.length; i++) {children[i].className = ""}
    e.target.className = "selected"
    handleSelect(e.target.textContent)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button key={category} onClick={handleClick} className={(category==="All") ? "selected" : ""}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
