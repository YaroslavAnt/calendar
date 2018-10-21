import React from "react";

import Week from "./Week/Week";

const weeks = props => {
  const { selected, month, select } = props;

  let weeks = [];
  let done = false;
  let date = month
    .clone()
    .startOf("month")
    .add("w" - 1)
    .day("Monday");
  let count = 0;
  let monthIndex = date.month();

  while (!done) {
    weeks.push(
      <Week
        key={date}
        count={count}
        date={date.clone()}
        month={month}
        select={day => select(day)}
        selected={selected}
      />
    );

    date.add(1, "w");

    done = count++ > 2 && monthIndex !== date.month();
    monthIndex = date.month();
  }
  return weeks;
};

export default weeks;
