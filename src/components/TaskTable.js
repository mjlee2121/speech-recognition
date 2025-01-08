import React, { useState } from 'react';

const TaskTable = ({ selectedDate }) => {
  // Store the input value and table data
  const [inputValue, setInputValue] = useState({ priority: "", task: "" });
  const [tableData, setTableData] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.task && selectedDate) {
      const dateKey = selectedDate.toDateString(); // Use the selected date as the key

      // Update the tableData with task and priority for the selected date
      setTableData({ ...tableData, [dateKey]: inputValue });

      // Reset input fields after submission
      setInputValue({ priority: "", task: "" });
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

      {/* Table */}
      <table border="1" style={styles.table}>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Priority</th>
            <th style={{ width: "80%" }}>Task</th>
          </tr>
        </thead>
        <tbody>
          {/* Display task and priority for the selected date */}
          {selectedDate && tableData[selectedDate.toDateString()] && (
            <tr>
              <td>{tableData[selectedDate.toDateString()].priority}</td>
              <td>{tableData[selectedDate.toDateString()].task}</td>
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
