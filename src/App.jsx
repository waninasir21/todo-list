import { useState } from "react";
import InputContainer from "./components/InputContainer";
import Todo from "./components/Todo";
import TodoContainer from "./components/TodoContainer";
import "./App.css";

function App() {
  const [inputVal, setInputVal] = useState('');
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }
  function addTodos() {
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }
  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }
  console.log(todos);
  return (
    <>
      <h1>ToDo List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodos={addTodos}
      />
      <TodoContainer todos={todos} delTodo={delTodo} />
    </>
  );
}

export default App;
