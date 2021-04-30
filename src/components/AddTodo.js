import React, { useRef } from "react";

function AddTodo({ setTodos }) {
  const inputRef = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.addTodo.value)
    const text = e.target.elements.addTodo.value;

    if (text) {
      const newTodo = {
        id: 4,
        text,
        done: false,
      };

      setTodos((previousTodos) => {
        return [...previousTodos, newTodo];
      });
      // console.log(inputRef)
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleAddTodo} className="addTodo">
      <input type="text" placeholder="Add todo" name="addTodo" ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
