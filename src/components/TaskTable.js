import React, { useState } from 'react';

const TaskTable = ({ onTaskSubmit, tasks }) => {
  const [inputValue, setInputValue] = useState({ priority: '', task: '', status:'' });
  const [status, setStatus] = useState()
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.task) {
      onTaskSubmit([...tasks, inputValue]); // Pass updated tasks to parent
      setInputValue({ priority: '', task: '' });
    }
  };

  return (
    <div>
      {/* Input Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="priority"
          value={inputValue.priority}
          onChange={handleInputChange}
          placeholder="Enter Priority"
        />
        <input
          type="text"
          name="task"
          value={inputValue.task}
          onChange={handleInputChange}
          placeholder="Enter Task"
        />
        <button type="submit">Add to Table</button>
      </form>

      {/* Always render the table, even if empty */}
      <table border="1" style={styles.table}>
        <thead>
          <tr>
            <th style={{ width: '15%' }}>Priority</th>
            <th style={{ width: '70%' }}>Task</th>
            <th style={{ width: '15%' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((row, index) => (
              <tr key={index}>
                <td>{row.priority}</td>
                <td>{row.task}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
                No tasks for this date
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};


// Inline styles for the table and cells
const styles = {
  table: {
    borderCollapse: "collapse",
    width: "580px",
    margin: "20px auto",
    border: "1px solid black",
  },
  cell: {
    border: "1px solid black",
    padding: "10px",
    textAlign: "center",
  },
};

export default TaskTable;
