import React from "react";
import "./style.css";
import Button from "../Button";

function AddBtn(props) {
  return (
    <Button type="primary" className="primary-btn" {...props} role="button" tabIndex="0">
      Add Expense
    </Button>
  );
}

export default AddBtn;