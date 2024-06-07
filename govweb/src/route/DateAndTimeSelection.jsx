import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateTimeActions } from "../store/DateTIme";
import { useNavigate } from "react-router-dom";

function DateAndTimeSelection() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();

  const [termsAccepted, setTermsAccepted] = useState(false);
  const dispatch = useDispatch();
  const documentType = useSelector((store) => store.documentType);
  console.log(documentType);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(DateTimeActions.SetDateTime({ selectedDate, selectedTime }));

    navigate("/my-application");
  };

  // Calculate minimum and maximum date values
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Tomorrow's date
  const lastWeek = new Date(today);
  lastWeek.setDate(lastWeek.getDate() - 6); // Date 7 days ago

  // Generate date options from tomorrow to 7 days ago
  const dateOptions = [];
  let currentDate = new Date(tomorrow);
  while (currentDate >= lastWeek) {
    const formattedDate = currentDate.toISOString().split("T")[0]; // Format as yyyy-mm-dd
    dateOptions.push(formattedDate);
    currentDate.setDate(currentDate.getDate() - 1); // Move to the previous day
  }

  // Generate time options at half-hour intervals from 10:00 AM to 4:00 PM
  const timeOptions = [];
  for (let hour = 10; hour < 16; hour++) {
    for (let minute of ["00", "30"]) {
      const time = `${hour}:${minute}`;
      timeOptions.push(time);
    }
  }

  const handleTermsChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  return (
    <div className="doc-req-card-heading">
      <h2>Select a Date and Time</h2>
      <form
        onSubmit={handleSubmit}
        action="/Application"
        className="doc-req-card"
      >
        <label htmlFor="date">Select a Date (Tomorrow to Last 7 Days):</label>
        <select
          id="date"
          name="date"
          required
          value={selectedDate}
          onChange={handleDateChange}
        >
          <option value="" disabled>
            Select a date
          </option>
          {dateOptions.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
        <label htmlFor="time">Select a Time (10:00 AM to 4:00 PM):</label>
        <select
          id="time"
          name="time"
          required
          value={selectedTime}
          onChange={handleTimeChange}
        >
          <option value="" disabled>
            Select a time
          </option>
          {timeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            required
            style={{ width: "40px" }}
            checked={termsAccepted}
            onChange={handleTermsChange}
          />

          <label htmlFor="terms"> I accept the terms and conditions</label>
        </div>

        <button
          style={{ maxWidth: "fit-content", padding: "5px" }}
          className="btn btn-success"
          type="submit"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}
export default DateAndTimeSelection;
