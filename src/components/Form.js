import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <form action="submit" className="flex-column flex-column-item">
        <div className="flex-column">
          <label htmlFor="event-name">Date:</label>
          <input type="date" id="date" name="date" />
        </div>

        <div className="flex-column flex-column-item">
          <label htmlFor="event-name">Title:</label>
          <input type="text" id="event-name" name="event-name" />
        </div>

        <div className="flex-column flex-column-item">
          <label htmlFor="basic">Notes:</label>
          <textarea id="basic" name="basic" />
        </div>

        <input
          type="submit"
          className="submit flex-column-item"
          value="Submit"
        />
      </form>
    );
  }
}

export default Form;
