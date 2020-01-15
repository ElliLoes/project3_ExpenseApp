import React from "react";
// import "./style.css";
import Button from "../Button";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ModifyBtn(props) {
  return (
    <Button type="secondary" className="secondary-btn" {...props} role="button" tabIndex="0">
      Modify
    </Button>
  );
}

export default ModifyBtn;