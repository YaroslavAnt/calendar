import React from "react";
import { connect } from "react-redux";

import MonthDisplay from "./MonthDisplay";
import { resetState } from "../redux/actions";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <input type="button" onClick={this.props.resetDay} value="Today" />
        <MonthDisplay
          month={this.props.month}
          prev={this.props.prev}
          next={this.props.next}
        />
        <input
          onClick={() => this.props.showModal(true)}
          type="button"
          value="Add"
          className="mainBG"
        />
        <input
          type="button"
          onClick={this.props.resetOldState}
          value="Refresh"
          className="mainBG"
        />
        <form action="submit">
          <i className="fas fa-search" />
          <input type="text" name="search" id="search" />
        </form>
      </header>
    );
  }
}

const MapStateToProps = () => {
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
)(Header);
