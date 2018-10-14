import React from "react";
import moment from "moment";

import Weeks from "./Weeks";
import Header from "./Header";
import Modal from "./Modal";
import Form from "./Form";

class Calendar extends React.Component {
  state = {
    month: moment(),
    selected: moment().startOf("day"),
    isModalActive: false
  };

  previous = () => {
    const { month } = this.state;
    this.setState({
      month: month.subtract(1, "month")
    });
  };

  next = () => {
    const { month } = this.state;
    this.setState({
      month: month.add(1, "month")
    });
  };

  select = day => {
    this.setState({
      selected: day.date,
      month: day.date.clone()
    });
  };

  showModal = bool => {
    this.setState({
      isModalActive: bool
    });
  };

  resetDay = () => {
    this.setState({
      month: moment(),
      selected: moment().startOf("day")
    });
  };

  render() {
    return (
      <section className="calendar">
        <Modal show={this.state.isModalActive}>
          <h1>Add Event</h1>
          <Form showModal={this.showModal} />
        </Modal>
        <Header
          prev={this.previous}
          next={this.next}
          month={this.state.month}
          showModal={this.showModal}
          resetDay={this.resetDay}
        />
        <Weeks
          month={this.state.month}
          select={this.select}
          selected={this.state.selected}
        />
      </section>
    );
  }
}

export default Calendar;
