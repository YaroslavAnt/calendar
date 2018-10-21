import React from "react";

import "./MonthDisplay.css";
import localization from "moment/locale/ru";

const monthDisplay = props => {
  const month = props.month;
  return (
    <div className="month-display">
      <i className="arrow fa fa-angle-left" onClick={props.prev} />
      <i className="arrow fa fa-angle-right" onClick={props.next} />
      <span className="month-label">
        {month.locale("ru", localization).format("MMMM YYYY")}
      </span>
    </div>
  );
};

export default monthDisplay;
