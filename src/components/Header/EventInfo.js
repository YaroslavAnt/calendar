import React from "react";

const EventInfo = props => {
  return (
    <div className="flex-column">
      <h1>Event Info</h1>
      <p>Date: {props.el.date}</p>
      <p>Title: {props.el.title}</p>
      <p>Notes: {props.el.notes}</p>
      <input
        type="button"
        onClick={() => props.showEdit(true)}
        value="Edit"
        className="mainBG"
      />
    </div>
  );
};

export default EventInfo;
