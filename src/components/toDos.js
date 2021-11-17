import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

const toDos = () => {
  const [tasks, setTasks] = useState([]);

//   const addTodo = () => {
//      axios.post(`${BASE_URL}/todolist/`);
//   };

  const getAllTasks = () => {
    const res = axios.get(`${BASE_URL}/todolist/`);
    setTasks(res.data);
  };

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
    <>

    </>
)
};

export default toDos;
