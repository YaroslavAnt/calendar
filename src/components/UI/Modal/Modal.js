import React from "react";

import "./Modal.css";
import Aux from "../../Aux";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={() => props.showModal(false)} />
      <div
        className="modal"
        style={{
          opacity: props.show ? "1" : "0",
          transform: props.show ? "translateY(0)" : "translateY(-100vh)"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
