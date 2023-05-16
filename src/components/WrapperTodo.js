import React, { useEffect, useState } from "react";
import DisplayTodo from "./DisplayTodo";

const WrapperTodo = ({ todos, setTodos }) => {
  const deleteAllHandle = () => {
    setTodos([]);
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (todos.length > 0) {
      return setShow(true);
    } else {
      return setShow(false);
    }
  }, [todos]);

  return (
    <>
      {show && <button onClick={deleteAllHandle}>Delete All</button>}
      <DisplayTodo todos={todos} setTodos={setTodos} />
    </>
  );
};

export default WrapperTodo;
