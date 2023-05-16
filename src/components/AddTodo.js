import React from "react";
// import { Button } from "@mui/material";

const AddTodo = ({ onChange, onSubmit, todo }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        
        <input onChange={onChange} value={todo} placeholder=" Write your task here!"/>
        <button color="secondary" variant="outlined" type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
