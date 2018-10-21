import React from "react";

import "./Modal.css";
import Wrapper from "../../Wrapper";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Modal;
