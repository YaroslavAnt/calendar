import React from "react";

import "./Header.css";
import MonthDisplay from "./MonthDisplay/MonthDisplay";
import SearchEvent from "../../containers/SearchEvent/SearchEvent";
import Button from "../UI/Button/Button";

const header = props => {
  return (
    <header className="header">
      <Button onClick={props.resetDay} value="Today" btnType="button" />
      <MonthDisplay month={props.month} prev={props.prev} next={props.next} />
      <Button
        onClick={() => props.showModal(true)}
        value="Add"
        btnColor="mainColor"
        btnType="button"
      />
      <Button
        onClick={props.cleanCalendar}
        value="Refresh"
        btnColor="mainColor"
        btnType="button"
      />
      <SearchEvent />
    </header>
  );
};

export default header;
