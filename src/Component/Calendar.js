import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MyCalendar() {
  const [startDate, setStartDate] = useState(null);

  return (
    <div>
      <h7>Select the Date: </h7>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select the date of service"
        popperPlacement="bottom-start"
        className="border border-gray-400 "/>
    </div>
  );
}
