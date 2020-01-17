import React from "react";
import { Button, Glyphicon } from "react-bootstrap";
import "./style.css";

function LoaderBtn({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderBtn ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Glyphicon glyph="refresh" className="spinning" />}
      {props.children}
    </Button>
  );
}

export default LoaderBtn;