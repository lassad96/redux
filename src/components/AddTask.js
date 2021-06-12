import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD } from '../redux/action';

const AddTask = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD,
      payload: {
        id: Math.floor(Math.random() * 10000),
        value: task,
        completed: false,
      },
    });
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
      
        <input
          value={task}
          type="text"
          onChange={(e) => setTask(e.target.value)}
          className="form-control"
          aria-describedby="button-addon2"
          placeholder="insert task "
        />
        <button className="btn-success">Add Task</button>
      </div>
    </form>
  );
};

export default AddTask;