import React from "react";
import shortid from "shortid";

const SelectField = ({ fields, shelfStatus, handleShelfStatusChange }) => {
  return (
    <select onChange={handleShelfStatusChange} value={shelfStatus}>
      {fields.map((field) => (
        <option
          value={field}
          key={shortid.generate()}
          disabled={field === "Move to..."}
        >
          {field}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
