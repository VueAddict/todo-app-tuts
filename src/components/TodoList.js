import React from "react";
import DeleteTodo from "./DeleteTodo";


function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, done: !t.done };
      }
      return t;
    });
    setTodos(updatedTodos)
  }


  // if we have an empty todos array
  if(!todos.length) {
      return <p>No todos left!</p>
  }

  // also we can use onDoubleClick instead of onClick
  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <li
          onDoubleClick={() => handleToggleTodo(todo)}
          style={{ textDecoration: todo.done ? "line-through" : "", cursor: "pointer" }}
          key={todo.id}
        >
          {todo.text}
          <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
