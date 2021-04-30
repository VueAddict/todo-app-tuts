import React from "react";

import {FaTrash} from 'react-icons/fa'

function DeleteTodo({ todo, setTodos }) {

    const handleDeleteTodo = (e) => {
        // e.stopPropagation()

        const confirmed = window.confirm('Do you really want to delete this todo ?')

        if(confirmed) {
            setTodos(previousTodos => (
                previousTodos.filter(t => t.id !== todo.id)
            ))
        }
    }

  return (
    <span
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 12,
        cursor: "pointer",
      }}
      onClick={handleDeleteTodo}
    >
      <FaTrash />
    </span>
  );
}

export default DeleteTodo;
