import React, { useState } from "react";

const Todo = ({ todos, deleteTask, updateTask, completed }) => {
  const [update, setUpdate] = useState(false);

  return (
    <div>
      <li onDoubleClick={() => completed(todos.id, todos.isCompleted)}>
        {todos.task}
      </li>

      {update && (
        <form
          onSubmit={(e) => {
            updateTask(e, todos.id);
            setUpdate(false);
          }}
        >
          <input type="text" name="newVal" />
          <input
            type="radio"
            name="inCompleteOrComplete"
            id="inComplete"
            value={false}
          />
          <label htmlFor="inComplete">not Done </label>
          <input type="submit" value="Done" />
        </form>
      )}

      {!update && <button onClick={() => setUpdate(!update)}>Edit</button>}
      <button onClick={() => deleteTask(todos.id)}>Delete</button>
    </div>
  );
};

export default Todo;
