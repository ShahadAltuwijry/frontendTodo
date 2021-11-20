import React from "react";
// import axios from "axios"
import Todo from "../Todo";

export const ToDos = ({
  todos,
  addToDo,
  deleteTask,
  updateTask,
  completed,
}) => {
  return (
    <div className="todoDiv">
      <form onSubmit={addToDo}>
        <input type="text" name="todoTask" />
        <input type="submit" name="submit" value="add" />
      </form>
      <ul>
        {todos.map((item, i) => (
          <Todo
            todos={item}
            key={item.id}
            deleteTask={deleteTask}
            updateTask={updateTask}
            completed={completed}
          />
        ))}
      </ul>
    </div>
  );
};

// export default ToDos;
