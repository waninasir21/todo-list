import React from "react";

function InputContainer({inputVal, writeTodo, addTodos}) {
  return (
    <div className="input-container">
      <input type="text" value={inputVal} onChange={writeTodo}/>
      <button onClick={addTodos}>Add Task +</button>
    </div>
  );
}

export default InputContainer;
