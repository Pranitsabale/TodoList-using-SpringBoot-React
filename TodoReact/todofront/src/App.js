import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./TodoList";
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/UpdateTask" element={<UpdateTask />} />
      </Routes>
    </Router>
  );
}

export default App;
