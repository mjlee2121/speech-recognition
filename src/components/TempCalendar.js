import React, {useState} from 'react'

const generateCalendar = (year, month) =>{
  const dates =[]
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month+1, 0).getDate()

  // Add empty cells for days before the start of the month
  for (let i=0; i <firstDay; i++){
    dates.push(null)
  }
  // Add dates of the month
  for (let day = 1; day <=daysInMonth; day++){
    dates.push(day)
  }
  console.log(year, month, firstDay, daysInMonth)
  return dates
}

const TempCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  
  const handlePrevMonth = ()=>{
    setCurrentDate(new Date(year, month-1, 1))
  }

  const handleNextMonth = ()=>{
    setCurrentDate(new Date(year, month+1, 1))
  }
  const dates = generateCalendar(year, month)
  
  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ]
  return (
    <div>
      <h2>
        {monthNames[month]} {year}
      </h2>
      <div>
        <button onClick={handlePrevMonth}>previous</button>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div style={styles.tableHeader}>
        {/* days of the week */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day)=>(
          <div key={day} style={{fontWeight:'bold'}}>
            {day}
          </div>
        ))}
        {/* dates */}
        {dates.map((date, index)=>(

          <div key={index} style={styles.tableContent}>
            {date||''}

          </div>
        ))}
      </div>
      <h1>
        The end
      </h1>
    </div>
  )
}

// Inline styles for the table and cells
const styles = {
  tableHeader: {
    display: 'grid', 
    gridTemplateColumns: 'repeat(7, 1fr)', 
    gap: '10px', 
    marginTop: '20px' 
  },
  tableContent: {
    padding: '10px', 
    textAlign: 'center', 
    border: '1px solid #ccc'
  },
};

export default TempCalendar