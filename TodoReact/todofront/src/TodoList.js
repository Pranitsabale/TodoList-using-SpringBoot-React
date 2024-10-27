import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TodoList.css"; // Import the CSS file

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get("http://localhost:1410/api/todo/");
        setTasks(response.data);
      } catch (error) {
        console.error("Error while fetching user data: ", error);
      }
    };

    fetchTask();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:1410/api/todo/delete/${id}`);
      setTasks(tasks.filter((task) => task.id !== id)); // Remove deleted task from state
    } catch (error) {
      console.error("Error while deleting task: ", error);
    }
  };

  const addTaskClicked = () => {
    navigate("./AddTask");
  };

  const updateTask = (task) => {
    return () => {
      navigate("./UpdateTask", { state: { task } });
    };
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.task}</td>
                <td style={{ color: task.status ? "green" : "red" }}>
                  {task.status ? "Completed" : "Pending"}
                </td>
                <td>
                  <button onClick={updateTask(task)}>Update</button>
                  <button
                    className="button-delete"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-tasks">
                No Task found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="add-task-container">
        <button onClick={addTaskClicked}>Add Task</button>
      </div>
    </div>
  );
}

export default TodoList;
