import React from "react";

import MonthDisplay from "./MonthDisplay";

const header = props => {
  return (
    <header className="header">
      <input type="button" value="Today" />
      <MonthDisplay month={props.month} prev={props.prev} next={props.next} />
      <input type="button" value="Add" className="mainBG" />
      <input type="button" value="Refresh" className="mainBG" />
      <form action="submit">
        <i className="fas fa-search" />
        <input type="text" name="search" id="search" />
      </form>
    </header>
  );
};

export default header;
