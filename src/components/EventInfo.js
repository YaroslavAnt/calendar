import React from "react";

const eventInfo = props => (
  <div className="flex-column">
    <h1>Event Info</h1>
    <p>Date: {props.el.date}</p>
    <p>Title: {props.el.title}</p>
    <p>Notes: {props.el.notes}</p>
  </div>
);

export default eventInfo;
