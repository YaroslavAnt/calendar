import React, { Component } from "react";
import Form from "./Form";

class EventInfo extends Component {
  render() {
    return (
      <div className="flex-column">
        <h1>Event Info</h1>
        <p>Date: {this.props.el.date}</p>
        <p>Title: {this.props.el.title}</p>
        <p>Notes: {this.props.el.notes}</p>
        <input
          type="button"
          onClick={() => this.props.showEdit(true)}
          value="Edit"
          className="mainBG"
        />
      </div>
    );
  }
}

export default EventInfo;
