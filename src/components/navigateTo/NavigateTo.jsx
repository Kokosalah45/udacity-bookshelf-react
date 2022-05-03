import React from "react";
import { Link } from "react-router-dom";
const NavigateTo = ({ to }) => {
  return (
    <div className="open-search">
      <Link to={to}>Add a book</Link>
    </div>
  );
};

export default NavigateTo;
