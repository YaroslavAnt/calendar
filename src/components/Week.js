import React from "react";

import Day from "./Day";

class Week extends React.Component {
  render() {
    let days = [];
    let { date } = this.props;

    const { month, selected, select, count } = this.props;

    for (var i = 0; i < 7; i++) {
      let day = {
        name: date.format("ddd"),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      };
      days.push(
        <Day
          day={day}
          month={date.month()}
          year={date.year()}
          key={i}
          selected={selected}
          count={count}
          select={select}
        />
      );

      date = date.clone();
      date.add(1, "day");
    }

    return (
      <div className="row week" key={days[0]}>
        {days}
      </div>
    );
  }
}

export default Week;
