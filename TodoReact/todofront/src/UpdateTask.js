import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import './UpdateTask.css'; // Import the CSS file

function UpdateTask() {
  const location = useLocation();
  const { task } = location.state || {};

  const [formData, setFormData] = useState({
    id: "",
    task: "",
    status: task?.status || false,
  });

  useEffect(() => {
    if (task) {
      setFormData({
        id: task.id,
        task: task.task,
        status: task.status,
      });
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "http://localhost:1410/api/todo/update",
        formData
      );

      console.log(response.data);
    } catch (error) {
      console.log("There was an error while submitting the form!", error);
    }

    setFormData({
      task: "",
      status: false,
    });
  };

  return (
    <div className="container">
      <h2>Enter Todo Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            id="task"
            name="task"
            value={formData.task}
            onChange={handleChange}
            placeholder="Enter Task"
            required
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <input
            type="checkbox"
            id="status"
            name="status"
            checked={formData.status}
            onChange={handleChange}
          />
          <span>{formData.status ? "Completed" : "Pending"}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateTask;
