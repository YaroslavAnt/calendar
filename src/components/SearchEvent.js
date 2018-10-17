import React, { Component } from "react";
import { connect } from "react-redux";

import Modal from "./Modal";
import EventInfo from "./EventInfo";
import FormEdit from "./FormEdit";

class SearchEvent extends Component {
  state = {
    inputValue: "",
    clickedItem: {},
    isModalActive: false,
    showEdit: false
  };

  onChangeHandler = event => {
    this.setState({
      inputValue: event.target.value.toLowerCase()
    });
  };

  onClickHandler = el => {
    this.setState({
      isModalActive: true,
      clickedItem: el
    });
  };

  showModal = bool => {
    this.setState({
      isModalActive: bool,
      inputValue: ""
    });
    this.showEdit(false);
  };

  showEdit = bool => {
    this.setState({
      showEdit: bool
    });
  };

  render() {
    const { inputValue, showEdit, isModalActive, clickedItem } = this.state;
    const list = (
      <ul className="mainBG">
        {this.props.events.map(
          el =>
            (el.title.toLowerCase().includes(inputValue) ||
              el.notes.toLowerCase().includes(inputValue)) && (
              <li
                key={JSON.stringify(el)}
                onClick={() => this.onClickHandler(el)}
              >
                <p>Date: {el.date}</p>
                <p>Title: {el.title}</p>
                <p>Notes: {el.notes}</p>
              </li>
            )
        )}
      </ul>
    );
    console.log(this.state.showEdit);
    return (
      <div className="search">
        <i className="fas fa-search" />
        <input
          value={this.state.inputValue}
          type="text"
          name="search"
          onChange={this.onChangeHandler}
          id="search"
        />
        {inputValue && list}
        <Modal show={isModalActive} showModal={this.showModal}>
          {showEdit ? (
            <FormEdit clickedItem={clickedItem} showModal={this.showModal} />
          ) : (
            <EventInfo el={clickedItem} showEdit={this.showEdit} />
          )}
        </Modal>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return { events: state };
};

export default connect(MapStateToProps)(SearchEvent);
