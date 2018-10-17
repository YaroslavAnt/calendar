import React from "react";

import MonthDisplay from "./MonthDisplay";
import SearchEvent from "./SearchEvent";

const header = props => {
  return (
    <header className="header">
      <input type="button" onClick={props.resetDay} value="Today" />
      <MonthDisplay month={props.month} prev={props.prev} next={props.next} />
      <input
        onClick={() => props.showModal(true)}
        type="button"
        value="Add"
        className="mainBG"
      />
      <input
        onClick={props.cleanCalendar}
        type="button"
        value="Refresh"
        className="mainBG"
      />
      <SearchEvent />
    </header>
  );
};

export default header;
