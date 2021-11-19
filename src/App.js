import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import axios from "axios";
import { ToDos } from "./components/Todos/ToDos";

const BASE_URL = "http://localhost:5000";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ToDos />} />
      </Routes>
    </div>
  );
}

export default App;
