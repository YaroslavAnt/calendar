import React from "react";

const day = props => {
  const {
    day,
    count,
    day: { date, isCurrentMonth, isToday, number, name },
    select,
    selected
  } = props;

  return (
    <div
      key={date.toString()}
      className={
        "day" +
        (isToday ? " today mainBG" : "") +
        (isCurrentMonth ? "" : " different-month") +
        (date.isSame(selected) ? " selected" : "")
      }
      onClick={() => select(day)}
    >
      {count === 0 && <span>{name}</span>}
      <p>{number}</p>
    </div>
  );
};

export default day;
