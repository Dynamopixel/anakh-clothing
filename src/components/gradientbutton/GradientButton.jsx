import React from "react";
import { Button } from "react-bootstrap";

const GradientButton = ({ text, onClick }) => {
  return (
    <Button className="gradient-btn" onClick={onClick}>
      {text}
    </Button>
  );
};

export default GradientButton;