import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const DisplayTodo = ({ todos, setTodos }) => {
  const deleteHandle = (index) => {
    const newTodos = todos.filter((todo, id) => {
      return index !== id;
    });
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, idx) => {
        return (
          <li key={idx}>
            {todo}
            <DeleteIcon
              className="delete-btn"
              onClick={() => deleteHandle(idx)}
            >
              delete
            </DeleteIcon>
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayTodo;
