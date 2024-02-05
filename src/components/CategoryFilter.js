import { Children } from "react";

function CategoryFilter({ categories }) {

  function handleSelect(e) {
    const children = e.target.parentNode.children
    for (let i=0; i<children.length; i++) {children[i].className = ""}
    e.target.className = "selected"
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button key={category} onClick={e => handleSelect(e)}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
