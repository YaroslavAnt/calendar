import React, { Component } from "react";

import Aux from "./Aux";
import Backdrop from "./Backdrop";

class Modal extends Component {
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="modal"
          style={{
            opacity: this.props.show ? "1" : "0",
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
