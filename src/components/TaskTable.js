import React, {useState} from 'react';

const TaskTable = (text) => {
  console.log('my text',text)
  const [inputValue, setInputValue] = useState({priority:"", task:""})
  const [priorityNum, setPriorityNum] = useState(1)
  const [tableData, setTableData] = useState([])

  const handleInputChange = (e) =>{
    const {name, value} = e.target
    setInputValue({...inputValue, [name]:value})

  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (inputValue.task){
      setTableData([...tableData, inputValue])
      setInputValue({priority:"",task:""})
    }
  }

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
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.priority}</td>
                <td>{row.task}</td>
              </tr>
            ))}
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

export default TaskTable