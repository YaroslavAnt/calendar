import React, { Component } from "react";
import { connect } from "react-redux";
import { replaceItem } from "../../redux/actions";
import { addEvent } from "../../redux/actions";

import "./FormEdit.css";
import Button from "../../components/UI/Button/Button";

class FormEdit extends Component {
  state = {
    date: this.props.clickedItem ? this.props.clickedItem.date : "",
    title: this.props.clickedItem ? this.props.clickedItem.title : "",
    notes: this.props.clickedItem ? this.props.clickedItem.notes : ""
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const { clickedItem } = this.props;
    clickedItem
      ? this.props.editEvent(clickedItem, this.state)
      : this.props.addNewEvent(this.state);
    this.props.showModal(false);
    this.setState({
      date: "",
      title: "",
      notes: ""
    });
  };

  render() {
    const { date, title, notes } = this.state;

    return (
      <form
        action="submit"
        onSubmit={this.onSubmitHandler}
        className="flex-column flex-column-item"
      >
        <div className="flex-column">
          <label htmlFor="event-name">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={this.onChangeHandler}
            value={date}
          />
        </div>

        <div className="flex-column flex-column-item">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={this.onChangeHandler}
            value={title}
          />
        </div>

        <div className="flex-column flex-column-item">
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            onChange={this.onChangeHandler}
            value={notes}
          />
        </div>

        <Button
          btnType="submit"
          btnColor="mainColor"
          styles="flex-column-item"
          value="Submit"
          disabled={!date || !title || !notes}
        />
      </form>
    );
  }
}

const MapStateToProps = state => {
  return {};
};

const MapDispatchToProps = dispatch => {
  return {
    editEvent: (oldEvent, newEvent) => {
      dispatch(replaceItem(oldEvent, newEvent));
    },
    addNewEvent: eventObj => {
      dispatch(addEvent(eventObj));
    }
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(FormEdit);
