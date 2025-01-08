import React from 'react'

const TaskManage = ({addToDailyTask}) => {
  const handleClick = () =>{
    addToDailyTask("Example task from Task manager")
  }
  // const addToMonthlyTask = ()=>{
    
  // }

  return (
    <div>
      <h1>Task Manage</h1>
      <button onClick={handleClick}>Add Example Task</button>
    </div>
  )
}

export default TaskManage