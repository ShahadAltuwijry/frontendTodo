import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { ToDos } from "./components/Todos";

const BASE_URL = "http://localhost:5000";

function App() {
  const [todos, setTodos] = useState([]);
  //to get the task from backend
  const getAllTasks = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/todos`);
      setTodos(res.data);
      // console.log(todos);
    } catch (error) {
      console.log("getting taks was caught on error:", error.message);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  //adding tasks
  const addToDo = async (e) => {
    e.preventDefault();
    try {
      let task = e.target.todotask.value;
      await axios.post(`${BASE_URL}/todos`, { task });
      getAllTasks();
    } catch (error) {
      console.log("adding taks was caught on error:", error.message);
    }
  };

  //deleting tasks
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/todos/${id}`);
      getAllTasks();
    } catch (error) {
      console.log("deleting taks was caught on error:", error.message);
    }
  };

  //updating tasks
  const updateTask = async (e, id) => {
    e.preventDefault();
    try {
      let task = e.target.newVal.value;
      let isCompleted = Boolean(e.inCompleteOrComplete.value);
      await axios.put(`${BASE_URL}/todos/${id}`, { task, isCompleted });
    } catch (error) {
      console.log("updating taks was caught on error:", error.message);
    }
  };

  //checking tasks as complete
  const completed = async (id, completed) => {
    try {
      await axios.put(`${BASE_URL}/todos/${id}`, { isCompleted: !completed });
    } catch (error) {
      console.log("checking taks was caught on error:", error.message);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ToDos
              todos={todos}
              addToDo={addToDo}
              deleteTask={deleteTask}
              updateTask={updateTask}
              completed={completed}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
