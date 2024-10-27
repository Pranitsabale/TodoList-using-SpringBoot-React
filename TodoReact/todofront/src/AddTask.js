import React, { useState } from "react";
import axios from "axios";
import './AddTask.css'; // Import the CSS file

function AddTask() {
  const [formData, setFormData] = useState({
    task: "",
    status: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:1410/api/todo/add",
        formData
      );

      console.log(response.data);
    } catch (error) {
      console.log("There was an error while submitting form!", error);
    }

    console.log("User Data: ", formData);
    setFormData({
      task: "",
      status: false,
    });
  };

  return (
    <div className="container">
      <h2>Add Todo Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">Task</label>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTask;
