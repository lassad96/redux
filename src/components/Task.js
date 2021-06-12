import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DELETE, EDIT, DONE } from '../redux/action';


const Task = ({ id, value, isDone }) => {
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState(value);

  const dispatch = useDispatch();

  // delete tasks:
  const handleDelete = (id) => {
    dispatch({
      type: DELETE,
      payload: id,
    });
  };
  // edit tasks:
  const submitEdit = (id) => {
    dispatch({
      type: EDIT,
      payload: {
        id: id,
        newText: editText,
      },
    });
    setEdit(null);
  
  };

  const toggle = (id) => {
    dispatch({
      type: DONE,
      payload: id,
    });
  };
  return (
    <>
      <input type="checkbox" className="done-icon" onClick={() => toggle(id)} ></input>
      {edit === id ? (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            className="btn-success "
            onClick={() => submitEdit(id)}
          >
            Submit Edit
          </button>
        </div>
      ) : (
        <div className={`task ${isDone && "completed"}`}>
          <span>{value}</span>
        </div>
      )}

      <button className="delete-btn btn-success" onClick={() => handleDelete(id)}>Delete</button>
      <button className="edit-btn btn-success" onClick={() => setEdit(id)} >Edit</button>

    
    </>
  );
};

export default Task;