import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const ToDos = () => {
  const [todos, setTodos] = useState([]);

  const getAllTasks = async () => {
    const res = await axios.get(`${BASE_URL}/todolist`);
    // console.log(res.data);
    setTodos(res.data);
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  //   const addTodo = () => {
  //      axios.post(`${BASE_URL}/todolist/`);
  //   };
  //   const updateTask = () => {
  //     const res = axios.put(`${BASE_URL}/todolist/:name`);
  //   };

  //   const completed = () => {
  //      axios.put(`${BASE_URL}/todolist/:name`);
  //   };

  //   const deleteTask = () => {
  //      axios.delete(`${BASE_URL}/todolist/`);
  //   };

  return (
    <div className="todoDiv">
      <ul>
        {todos.map((ele) => {
          <li key={todos.id}> {todos.name} </li>;
        })}
      </ul>
    </div>
  );
};

// export default ToDos;
