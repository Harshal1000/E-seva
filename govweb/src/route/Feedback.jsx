import React from "react";

function Feedback() {
  return (
    <div className="container-1">
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="rating">Rating:</label>
        <select id="rating" name="rating">
          <option value="5">Excellent</option>
          <option value="4">Good</option>
          <option value="3">Average</option>
          <option value="2">Poor</option>
          <option value="1">Very Poor</option>
        </select>

        <label for="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback" rows="5" required></textarea>

        <button type="submit" class="login-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Feedback;
