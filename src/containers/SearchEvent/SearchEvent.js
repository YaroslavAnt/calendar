import React, { Component } from "react";
import { connect } from "react-redux";

import "./SearchEvent.css";
import Modal from "../../components/UI/Modal/Modal";
import EventInfo from "../../components/Header/EventInfo";
import FormEdit from "../FormEdit/FormEdit";
import SearchList from "../../components/Header/SearchList/SearchList";
import Wrapper from "../../components/Wrapper";

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
      clickedItem: el,
      inputValue: ""
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
    const { showEdit, isModalActive, clickedItem } = this.state;

    return (
      <div className="search">
        <SearchList
          inputValue={this.state.inputValue}
          onChangeHandler={this.onChangeHandler}
          onClickHandler={this.onClickHandler}
          events={this.props.events}
        />
        <Modal show={isModalActive} showModal={this.showModal}>
          {showEdit ? (
            <Wrapper>
              <h1>Edit Event</h1>
              <FormEdit clickedItem={clickedItem} showModal={this.showModal} />
            </Wrapper>
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
