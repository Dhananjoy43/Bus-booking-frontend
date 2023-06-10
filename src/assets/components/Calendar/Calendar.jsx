import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import React, { useState } from "react";

export default function Calendar_component() {
  const [value, onChange] = useState(new Date());
  // console.log(value);

  return (
    <Calendar
      onChange={onChange}
      value={value}
      minDate={new Date()}
      view="month"
    />
  );
}
