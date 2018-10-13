import React from "react";
import moment from "moment";

import Weeks from "./Weeks";
import Header from "./Header";
import Modal from "./Modal";
import Form from "./Form";

class Calendar extends React.Component {
  state = {
    month: moment(),
    selected: moment().startOf("day")
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

  render() {
    return (
      <section className="calendar">
        <Modal
          show
          // show={this.props.showModal}
          // modalClosed={this.purchaseCancellHandler}
        >
          <h1>Add Event</h1>
          <Form />
        </Modal>
        <Header
          prev={this.previous}
          next={this.next}
          month={this.state.month}
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
