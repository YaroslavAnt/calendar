import React from "react";

const monthDisplay = props => {
  const month = props.month;
  return (
    <div className="month-display">
      <i className="arrow fa fa-angle-left" onClick={props.prev} />
      <span className="month-label">{month.format("MMMM YYYY")}</span>
      <i className="arrow fa fa-angle-right" onClick={props.next} />
    </div>
  );
};

export default monthDisplay;
