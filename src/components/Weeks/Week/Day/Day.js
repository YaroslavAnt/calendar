import React from "react";
import "./Day.css";

import { connect } from "react-redux";

class Day extends React.Component {
  render() {
    const {
      day,
      count,
      day: { date, isCurrentMonth, isToday, number, name },
      select,
      selected,
      events
    } = this.props;

    return (
      <div
        key={date.toString()}
        className={
          "day" +
          (isToday ? " today" : "") +
          (isCurrentMonth ? "" : " different-month") +
          (date.isSame(selected) ? " selected" : "")
        }
        onClick={() => select(day)}
      >
        {count === 0 && <span>{name}</span>}
        <p className="text-small">{number}</p>
        {events.map((event, index) => {
          return (
            date.isSame(event.date) && (
              <div className="event" key={index}>
                <p className="mainBG text-smaller">{event.title}</p>
                <ul className="text-xs">
                  <li>
                    <span>{event.notes}</span>
                  </li>
                </ul>
              </div>
            )
          );
        })}
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    events: state
  };
};

export default connect(MapStateToProps)(Day);
