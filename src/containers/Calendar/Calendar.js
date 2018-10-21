import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";

import "./Calendar.css";
import Weeks from "../../components/Weeks/Weeks";
import Header from "../../components/Header/Header";
import Modal from "../../components/UI/Modal/Modal";
import { resetState } from "../../redux/actions";
import FormEdit from "../FormEdit/FormEdit";

class Calendar extends Component {
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
        <Modal show={this.state.isModalActive} showModal={this.showModal}>
          <h1>Add Event</h1>
          <FormEdit showModal={this.showModal} />
        </Modal>
        <Header
          prev={this.previous}
          next={this.next}
          month={this.state.month}
          showModal={this.showModal}
          resetDay={this.resetDay}
          cleanCalendar={this.props.resetOldState}
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

const MapStateToProps = state => {
  return {};
};

const MapDispatchToProps = dispatch => {
  return {
    resetOldState: () => {
      dispatch(resetState());
    }
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Calendar);

//export default Calendar;
