import React from "react";

import "./Button.css";

const Button = props => {
  return (
    <input
      onClick={props.onClick}
      type={props.btnType}
      value={props.value}
      className={[props.btnColor, props.styles, "button"].join(" ")}
      disabled={props.disabled}
    />
  );
};

export default Button;
