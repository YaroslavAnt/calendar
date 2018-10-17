import React, { Component } from "react";
import { connect } from "react-redux";

import Modal from "./Modal";
import EventInfo from "./EventInfo";

class SearchEvent extends Component {
  state = {
    inputValue: "",
    clickedItem: {},
    isModalActive: false
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
      isModalActive: bool
    });
  };

  render() {
    const { inputValue } = this.state;
    const list = (
      <ul className="mainBG">
        {this.props.events.map(
          el =>
            (el.title.includes(inputValue) ||
              el.notes.includes(inputValue)) && (
              <li
                key={JSON.stringify(el)}
                onClick={() => this.onClickHandler(el)}
              >
                <p>
                  Title:
                  {el.title}
                </p>
                <p>
                  Notes:
                  {el.notes}
                </p>
              </li>
            )
        )}
      </ul>
    );
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
        <Modal show={this.state.isModalActive} showModal={this.showModal}>
          <EventInfo el={this.state.clickedItem} />
        </Modal>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return { events: state };
};

export default connect(MapStateToProps)(SearchEvent);
