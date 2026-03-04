import React from "react";

function Todo({ todo, index, delTodo }) {
  return (
    <div className="todo">
      <span>{todo}</span>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={() => delTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
