import React, { useState } from 'react';
import TaskTable from './TaskTable';

// Helper function to generate dates for the current month
const generateCalendar = (year, month) => {
  const dates = [];
  const firstDay = new Date(year, month, 1).getDay(); // Day of the week the month starts on
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the month

  // Add empty cells for days before the start of the month
  for (let i = 0; i < firstDay; i++) {
    dates.push(null);
  }

  // Add dates of the month
  for (let day = 1; day <= daysInMonth; day++) {
    dates.push(day);
  }

  return dates;
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // Selected date

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day) => {
    if (day) {
      setSelectedDate(new Date(year, month, day)); // Set selected date when clicked
    }
  };

  const dates = generateCalendar(year, month);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div>
      <h2>
        {monthNames[month]} {year}
      </h2>
      <div>
        <button className="prev-next-button" onClick={handlePrevMonth}>Previous</button>
        <button className="prev-next-button" onClick={handleNextMonth}>Next</button>
      </div>

      <div style={styles.tableHeader}>
        {/* Days of the week */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} style={{ fontWeight: 'bold' }}>
            {day}
          </div>
        ))}

        {/* Dates */}
        {dates.map((date, index) => (
          <div
            key={index}
            onClick={() => handleDateClick(date)}
            style={{
              ...styles.tableContent,
              cursor: date ? 'pointer' : 'default',
              backgroundColor: selectedDate && selectedDate.getDate() === date ? 'rgba(255, 255, 255, 0.39)' : ''
            }}
          >
            {date || ''}
          </div>
        ))}
      </div>

      {/* Display TaskTable component and pass the selected date */}
      <TaskTable selectedDate={selectedDate} />
    </div>
  );
};

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
    border: '1px solid #ccc',
    position: 'relative'
  }
};

export default Calendar;
