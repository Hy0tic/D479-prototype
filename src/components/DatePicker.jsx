import React, { useState } from 'react';

function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState('');
  const [formattedDateAfterFiveDays, setFormattedDateAfterFiveDays] = useState('');

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);

    // Calculate 5 days ahead
    const resultDate = new Date(newDate);
    resultDate.setDate(resultDate.getDate() + 5); // Add 5 days

    // Format the date as "Day of the Week, Day Month"
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = resultDate.toLocaleDateString('en-US', options);
    setFormattedDateAfterFiveDays(formattedDate);
  };

  return (
    <div>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
      <p>Selected Date: {selectedDate}</p>
      <p>Date 5 Days Later: {formattedDateAfterFiveDays}</p>
    </div>
  );
}

export default DatePickerComponent;
