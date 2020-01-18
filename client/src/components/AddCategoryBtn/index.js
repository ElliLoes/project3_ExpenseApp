import React from "react";
import "./style.css";
import Button from "../Button";

function AddCategoryBtn(props) {
  return (
    <Button type="primary" className="primary-btn" {...props} role="button" tabIndex="0">
      Add Category
    </Button>
  );
}

export default AddCategoryBtn;