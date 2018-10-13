import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from "../redux/actions";

class Form extends Component {
  state = {
    date: "",
    title: "",
    notes: ""
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.addNewEvent(this.state);
  };

  render() {
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
            value={this.state.date}
          />
        </div>

        <div className="flex-column flex-column-item">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={this.onChangeHandler}
            value={this.state.title}
          />
        </div>

        <div className="flex-column flex-column-item">
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            onChange={this.onChangeHandler}
            value={this.state.notes}
          />
        </div>

        <input
          type="submit"
          className="submit flex-column-item"
          value="Submit"
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
    addNewEvent: eventObj => {
      dispatch(addEvent(eventObj));
    }
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Form);
