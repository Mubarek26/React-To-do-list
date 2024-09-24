import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  function newChange(e) {
    setNewItem(e.target.value);
  }

  function handlSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem },
    ]);
  }

  function deletTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todos) => todos.id !== id);
    });
  }

  return (
    <div>
      <form className="new-item-form" onSubmit={handlSubmit}>
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input type="text" id="item" value={newItem} onChange={newChange} />
          <button className="btn">Add</button>
        </div>
      </form>

      <h1 className="header">Todo List</h1>

      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deletTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
